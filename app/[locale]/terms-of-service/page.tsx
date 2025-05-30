import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Ai Video Editing Tool To Remove Text",
  description: "Terms of service and usage conditions for Ai Video Editing Tool To Remove Text.",
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="space-y-6 text-base">
        <p className="text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
          <p>
            By accessing or using Ai Video Editing Tool To Remove Text at aivideoeditingtooltoremovetext.com ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Description of Service</h2>
          <p>
            Ai Video Editing Tool To Remove Text is an intelligent online service that uses advanced AI technology to remove text, watermarks, and subtitles from videos. The Service includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Smart text detection and removal from video content</li>
            <li>Intelligent background repair after text removal</li>
            <li>Batch processing capabilities for multiple videos</li>
            <li>Support for multiple video formats (MP4, AVI, MOV, etc.)</li>
            <li>Secure cloud storage for video projects</li>
            <li>High-quality video processing with original quality preservation</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>
          <p>
            You are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintaining the confidentiality of your account and password</li>
            <li>Restricting access to your computer and account</li>
            <li>All activities that occur under your account or password</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Service Usage and Limitations</h2>
          <h3 className="text-xl font-medium">4.1 Acceptable Use</h3>
          <p>You agree not to use the Service for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processing videos that violate any third-party rights</li>
            <li>Processing videos containing illegal, harmful, or inappropriate content</li>
            <li>Attempting to circumvent any service limitations or restrictions</li>
            <li>Reverse engineering or attempting to extract the source code of our software</li>
          </ul>

          <h3 className="text-xl font-medium mt-4">4.2 Service Features and Process</h3>
          <p>Our service operates in three simple steps:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Upload Video: Drag and drop or click to upload your video files</li>
            <li>Select Area: Our AI automatically detects text areas, or you can manually select areas to process</li>
            <li>Start Processing: Our AI system automatically completes text removal and background repair</li>
          </ul>

          <h3 className="text-xl font-medium mt-4">4.3 Service Limitations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processing time may vary based on video complexity and server load</li>
            <li>Service availability may be affected by maintenance or technical issues</li>
            <li>Specific video format and size limitations may apply</li>
            <li>Cloud storage capacity may be limited based on your subscription plan</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Payments and Refunds</h2>
          <p>
            Some aspects of the Service may be provided for a fee. You agree to pay all fees associated with your use of the Service.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Special offer: 50% off for first-time users</li>
            <li>All fees are exclusive of taxes unless stated otherwise</li>
            <li>Payments are processed securely through our payment providers</li>
            <li>Refunds may be provided at our discretion for service issues</li>
            <li>Subscription cancellations must be made before the renewal date</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Intellectual Property Rights</h2>
          <p>
            You retain all rights to your video content. By using our Service, you grant us a limited license to process and store your videos solely for the purpose of providing the Service.
          </p>
          <p>
            The Service's software, AI technology, design, and content are protected by intellectual property rights owned by us or our licensors.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Disclaimer of Warranties</h2>
          <p>
            While we strive to provide professional video text removal solutions, the Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Service will be uninterrupted or error-free</li>
            <li>Text removal and background repair results will be perfect or meet your requirements</li>
            <li>Any errors in the Service will be corrected</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this site and updating the "Last updated" date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-2">
            Email: support@aivideoeditingtooltoremovetext.com
          </p>
          <p>
            Website: aivideoeditingtooltoremovetext.com
          </p>
        </section>
      </div>
    </div>
  );
} 