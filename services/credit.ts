import { getCreditsByUserUuid, insertCredit } from "@/models/credit";

import { Credit } from "@/types/credit";
import { UserCredits } from "@/types/user";
import { getFirstPaidOrderByUserUuid } from "@/models/order";
import { getIsoTimestr } from "@/lib/time";
import { getSnowId } from "@/lib/hash";

export enum CreditsTransType {
  NewUser = "new_user", // initial credits for new user
  UserPay = "user_pay", // user pay for credits
  SystemAdd = "system_add", // system add credits
}

export enum CreditsAmount {
  NewUserGet = 10,
  PingCost = 1,
}

export async function getUserCredits(user_uuid: string): Promise<UserCredits> {
  let user_credits: UserCredits = {
    left_credits: 0,
  };

  try {
    const first_paid_order = await getFirstPaidOrderByUserUuid(user_uuid);
    if (first_paid_order) {
      user_credits.is_recharged = true;
    }

    const credits = await getCreditsByUserUuid(user_uuid);
    if (credits) {
      credits.forEach((v: Credit) => {
        user_credits.left_credits += v.credits;
      });
    }

    if (user_credits.left_credits < 0) {
      user_credits.left_credits = 0;
    }

    if (user_credits.left_credits > 0) {
      user_credits.is_pro = true;
    }

    return user_credits;
  } catch (e) {
    console.log("get user credits failed: ", e);
    return user_credits;
  }
}

export async function decreaseCredits({
  user_uuid,
  trans_type,
  cost_credits,
}: {
  user_uuid: string;
  trans_type: CreditsTransType;
  cost_credits: number;
}) {
  try {
    let order_no = "";
    let expired_at = "";
    let left_credits = 0;

    const credits = await getCreditsByUserUuid(user_uuid);
    if (credits) {
      for (let i = 0, l = credits.length; i < l; i++) {
        const credit = credits[i];
        left_credits += credit.credits;

        // credit enough for cost
        if (left_credits >= cost_credits) {
          order_no = credit.order_no;
          expired_at = credit.expired_at || "";
          break;
        }

        // look for next credit
      }
    }

    const new_credit: Credit = {
      trans_no: getSnowId(),
      created_at: getIsoTimestr(),
      user_uuid: user_uuid,
      trans_type: trans_type,
      credits: 0 - cost_credits,
      order_no: order_no,
      expired_at: expired_at,
    };
    await insertCredit(new_credit);
  } catch (e) {
    console.log("decrease credits failed: ", e);
    throw e;
  }
}

export async function increaseCredits({
  user_uuid,
  trans_type,
}: {
  user_uuid: string;
  trans_type: string;
}) {
  try {
    let earn_credits: number = 0;
    let expired_at = "";

    if (trans_type === CreditsTransType.NewUser) {
      earn_credits = CreditsAmount.NewUserGet;

      const currentDate = new Date();
      const oneYearLater = new Date(currentDate);
      oneYearLater.setFullYear(currentDate.getFullYear() + 1);

      expired_at = oneYearLater.toISOString();
    } else {
      throw new Error("invalid trans_type");
    }

    const new_credit: Credit = {
      trans_no: getSnowId(),
      created_at: getIsoTimestr(),
      user_uuid: user_uuid,
      trans_type: trans_type,
      credits: earn_credits,
      order_no: "",
      expired_at: expired_at,
    };
    await insertCredit(new_credit);
  } catch (e) {
    console.log("increase credits failed: ", e);
    throw e;
  }
}
