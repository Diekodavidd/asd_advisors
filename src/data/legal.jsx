import { PiUserLight, PiFileTextLight, PiGearSixLight } from 'react-icons/pi';
import termsHero from '../assets/images/legal/terms-hero.png';
import termsSide from '../assets/images/legal/terms-side.png';
import privacyHero from '../assets/images/legal/privacy-hero.png';
import privacySide from '../assets/images/legal/privacy-side.png';
import cta from '../assets/images/legal/cta.png';

// Copy taken from the approved designs — have it reviewed by counsel before launch.
export const LEGAL_CTA_IMAGE = cta;

export const TERMS = {
  lines: ['Terms of', <span className="accent" key="s">Service</span>],
  text: 'These terms set out the rules for using our website and the information provided on it.',
  image: termsHero,
  alt: 'Curved glass tower beside the skyline at sunset',
  side: { image: termsSide, title: 'Need clarity on our terms?', text: 'If you have any questions about these Terms of Service, please contact our team.' },
  ctaText: 'Speak to our team for more information about our website, our services or how we work.',
  splitAt: 6,
  sections: [
    { id: 'introduction', label: 'Introduction', eyebrow: 'Introduction', title: 'Welcome to Our Website', paras: ['These Terms of Service (“Terms”) govern your use of the website operated by ASD Advisors Ltd (“we”, “our”, or “us”). By accessing or using this website, you agree to be bound by these Terms. If you do not agree, please do not use our website.'] },
    { id: 'use', label: 'Use of our website', eyebrow: 'Use of our website', title: 'Permitted Use', paras: ['You may use our website for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else’s use of the website.'] },
    { id: 'ip', label: 'Intellectual property', eyebrow: 'Intellectual property', title: 'Our Content', paras: ['All content on this website — including text, graphics, logos, images and design — is the property of ASD Advisors Ltd or its licensors and is protected by intellectual property laws. You may not reproduce, distribute or use any content without our prior written permission.'] },
    { id: 'acceptable', label: 'Acceptable use', eyebrow: 'Acceptable use', title: 'Your Responsibilities', paras: ['You agree not to:'], bullets: ['Use the website in any way that is unlawful or fraudulent.', 'Attempt to gain unauthorised access to our systems.', 'Introduce any viruses or harmful code.', 'Use the website to transmit any offensive or harmful material.'] },
    { id: 'disclaimer', label: 'Disclaimer', eyebrow: 'Disclaimer', title: 'Information on Our Website', paras: ['The information on this website is provided for general informational purposes only. While we strive to ensure accuracy, we make no warranties or representations about the completeness, reliability or suitability of the information. Any reliance you place on such information is at your own risk.'] },
    { id: 'liability', label: 'Limitation of liability', eyebrow: 'Limitation of liability', title: 'Our Liability', paras: ['To the fullest extent permitted by law, ASD Advisors Ltd shall not be liable for any direct, indirect, incidental or consequential losses or damages arising from your use of, or inability to use, this website or any information contained on it.'] },
    { id: 'links', label: 'Third-party links', eyebrow: 'Third-party links', title: 'External Websites', paras: ['Our website may contain links to external websites for your convenience. We are not responsible for the content, privacy practices or availability of these third-party sites.'] },
    { id: 'changes', label: 'Changes to these terms', eyebrow: 'Changes to these terms', title: 'Updates to These Terms', paras: ['We may update these Terms from time to time. The latest version will always be available on this page, with the effective date. Your continued use of the website after any changes constitutes acceptance of the updated Terms.'] },
    { id: 'law', label: 'Governing law', eyebrow: 'Governing law', title: 'Governing Law', paras: ['These Terms are governed by and construed in accordance with the laws of the jurisdiction in which ASD Advisors Ltd operates, without regard to conflict of law principles.'] },
    { id: 'contact', label: 'Contact us', eyebrow: 'Contact us', title: 'Contact Us', paras: ['If you have any questions about these Terms of Service, please contact us.'], email: 'legal@asdadvisors.com' },
  ],
};

export const PRIVACY = {
  lines: ['Privacy', <span className="accent" key="p">Policy</span>],
  text: 'Your privacy matters to us. This policy explains how we collect, use, protect and manage your personal information.',
  image: privacyHero,
  alt: 'Executive looking out from a curved terrace at sunset',
  position: '60% center',
  side: { image: privacySide, title: 'Have questions about your data?', text: 'Our team is here to provide clarity on how we handle your information.' },
  ctaText: 'Speak to our team for more information about how we protect your data and respect your privacy.',
  splitAt: 6,
  sections: [
    { id: 'introduction', label: 'Introduction', eyebrow: 'Introduction', title: 'Our Commitment to Your Privacy', paras: ['ASD Advisors Ltd (“we”, “our”, or “us”) is committed to protecting your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit our website or engage with our services.'] },
    { id: 'collect', label: 'Information we collect', eyebrow: 'Information we collect', title: 'Information We Collect', paras: ['We may collect the following types of information:'], icons: [
      { icon: PiUserLight, title: 'Personal information', text: 'Such as your name, email address, phone number and company details when you fill out a form or contact us.' },
      { icon: PiFileTextLight, title: 'Usage information', text: 'Information about how you use our website, including pages visited, device information and browser type.' },
      { icon: PiGearSixLight, title: 'Cookies and tracking technologies', text: 'We use cookies to enhance your experience and analyse website traffic. You can manage your cookie preferences through your browser settings.' },
    ] },
    { id: 'use', label: 'How we use your information', eyebrow: 'How we use your information', title: 'How We Use Your Information', paras: ['We use your information to:'], bullets: ['Respond to your enquiries and provide relevant information about our services.', 'Understand your needs and improve our website and services.', 'Send you updates, insights or relevant content (only where you have consented).', 'Comply with legal and regulatory obligations.'] },
    { id: 'basis', label: 'Legal basis for processing', eyebrow: 'Legal basis for processing', title: 'Legal Basis for Processing', paras: ['We process your personal information based on:'], bullets: ['Your consent', 'Our legitimate business interests', 'Compliance with legal obligations', 'Performance of a contract (where applicable)'] },
    { id: 'share', label: 'How we share information', eyebrow: 'How we share information', title: 'How We Share Information', paras: ['We do not sell your personal information. We may share your information with:'], bullets: ['Trusted service providers who support our website and business operations (such as hosting, analytics and email services).', 'Professional advisors where required for legal, regulatory or governance purposes.', 'Relevant authorities if required by law.'] },
    { id: 'security', label: 'Data security', eyebrow: 'Data security', title: 'Data Security', paras: ['We implement appropriate technical and organisational measures to protect your personal information from unauthorised access, loss, misuse or alteration.'] },
    { id: 'retention', label: 'Data retention', eyebrow: 'Data retention', title: 'Data Retention', paras: ['We keep your personal information only for as long as necessary to fulfil the purposes outlined in this policy or as required by law.'] },
    { id: 'rights', label: 'Your rights', eyebrow: 'Your rights', title: 'Your Rights', paras: ['You have the right to:'], bullets: ['Access the personal information we hold about you.', 'Request correction or deletion of your information.', 'Object to or restrict certain processing activities.', 'Withdraw your consent at any time.'] },
    { id: 'cookies', label: 'Cookies', eyebrow: 'Cookies', title: 'Cookies', paras: ['Our website uses cookies to enhance functionality and analyse usage. You can choose to accept or reject cookies through your browser settings.'] },
    { id: 'links', label: 'Third-party links', eyebrow: 'Third-party links', title: 'Third-Party Links', paras: ['Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites.'] },
    { id: 'updates', label: 'Updates to this policy', eyebrow: 'Updates to this policy', title: 'Updates to This Policy', paras: ['We may update this Policy from time to time. The latest version will always be available on this page, with the effective date.'] },
    { id: 'contact', label: 'Contact us', eyebrow: 'Contact us', title: 'Contact Us', paras: ['If you have any questions about this Privacy Policy or how we handle your information, please contact us.'], email: 'privacy@asdadvisors.com' },
  ],
};
