import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ai Video Editing Tool To Remove Text",
  description: "Privacy policy for Ai Video Editing Tool To Remove Text - Learn how we protect your privacy and handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-base">
        <p className="text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Ai Video Editing Tool To Remove Text ("we," "our," or "us"). We are committed to protecting your privacy and handling your data with transparency and care. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our intelligent video text removal service at aivideoeditingtooltoremovetext.com.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <h3 className="text-xl font-medium">2.1 Information You Provide</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account information (email address, password)</li>
            <li>Payment information (processed securely through our payment providers)</li>
            <li>Video files you upload for text removal processing</li>
            <li>Selected text areas and processing preferences</li>
            <li>Feedback and correspondence</li>
          </ul>

          <h3 className="text-xl font-medium">2.2 Automatically Collected Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Usage data and analytics</li>
            <li>Device and browser information</li>
            <li>IP address and location data</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide our intelligent video text removal service</li>
            <li>Process and store your videos temporarily</li>
            <li>Handle payments and maintain your account</li>
            <li>Support batch processing of multiple videos</li>
            <li>Improve our AI detection and background repair capabilities</li>
            <li>Send service updates and promotional content</li>
            <li>Ensure security and prevent fraud</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Video Data Processing</h2>
          <p>
            When you upload videos to our service:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Videos are processed securely using our advanced AI technology</li>
            <li>We support multiple video formats including MP4, AVI, MOV, and more</li>
            <li>Original and processed videos are stored securely in our cloud storage</li>
            <li>We maintain the original video quality during processing</li>
            <li>All video processing is done using automated AI systems for text detection and background repair</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your data, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure cloud storage for your video projects</li>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication measures</li>
            <li>Secure cloud infrastructure</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Export your data</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="mt-2">
            Email: support@aivideoeditingtooltoremovetext.com
          </p>
          <p>
            Website: aivideoeditingtooltoremovetext.com
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Policy.
          </p>
        </section>
      </div>
    </div>
  );
} 