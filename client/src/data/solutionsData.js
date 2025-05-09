import EducationPortalImage from "../images/patient-education-portal.webp"
import AppointmentReminderImage from "../images/appointment-reminder.webp"
import EmployeeSchedulingImage from "../images/employee-scheduling.webp"
import TrainingTrackerImage from "../images/internal-training-tracker.webp"
import FeedbackToolImage from "../images/clinic-feedback.webp"
import InventoryTrackerImage from "../images/Inventory-tracker.webp"

export const solutionsData = [
  {
    id: 1,
    image: EducationPortalImage,
    title: "Patient Education Portal",
    heading: "Empower Your Patients with Knowledge",
    subheading: "Get the tool you need built for free. Pay monthly when you use it and cancel any time, no strings attached.",
    description: "A web-based platform offering interactive articles, videos, and FAQs about procedures, treatments, and health tips. Enhances patient engagement and education without handling sensitive data.",
    extendedDescription: "The Patient Education Portal is designed to enhance patient understanding and engagement by providing accessible, reliable health information. By offering interactive articles, videos, and FAQs about procedures, treatments, and health tips, this platform empowers patients to make informed decisions about their care. Implementing such a portal can lead to improved patient satisfaction, reduced anxiety, and better health outcomes, as patients feel more in control and knowledgeable about their health journeys. Moreover, by addressing common questions and concerns proactively, the portal can reduce the time staff spend on repetitive inquiries, allowing them to focus on more critical tasks. This tool not only supports patient autonomy but also streamlines clinic operations, making it a valuable addition to any healthcare practice.",
    systemFunctionality: "The system will feature a user-friendly interface where patients can access categorized educational content, including articles, videos, and FAQs. Content will be organized by topics such as procedures, treatments, and general health tips. An admin panel will allow clinic staff to easily update and manage content, ensuring information remains current and relevant. The portal will be accessible via desktop and mobile devices, ensuring patients can access information at their convenience.",
    faqs: [
      {
        question: "How does the Patient Education Portal benefit my clinic?",
        answer: "It enhances patient engagement by providing accessible health information, reducing repetitive inquiries, and allowing staff to focus on more critical tasks, thereby improving overall clinic efficiency."
      },
      {
        question: "Can I customize the content on the portal?",
        answer: "Yes, the portal includes an admin panel where you can easily add, update, or remove content to ensure it aligns with your clinic's services and patient needs."
      },
      {
        question: "Is the portal accessible on mobile devices?",
        answer: "Absolutely, the portal is designed to be responsive and accessible on both desktop and mobile devices, ensuring patients can access information anytime, anywhere."
      },
      {
        question: "Does the portal handle sensitive patient data?",
        answer: "No, the portal is designed to provide general health information and does not handle or store any sensitive patient data, minimizing compliance concerns."
      },
      {
        question: "How long does it take to set up the portal?",
        answer: "The initial setup, including customization and content upload, can typically be completed within 2-3 months, depending on the volume of content and specific requirements."
      },
      {
        question: "Can patients provide feedback on the content?",
        answer: "Yes, the portal can include a feedback feature allowing patients to comment on the usefulness of the content, helping you to continually improve the information provided."
      }
    ],
    expectedTimeline: "Development and deployment are expected to take approximately 8-10 weeks, including customization and content integration.",
    path: "/services/patient-education-portal"
  },
  {
    id: 2,
    image: AppointmentReminderImage,
    title: "Appointment Reminder System",
    heading: "Reduce No-Shows with Automated Reminders",
    subheading: "Get the tool you need built for free. Pay monthly when you use it and cancel any time, no strings attached.",
    description: "A tool enabling clinic administrators to schedule and send appointment reminders via email or SMS. Reduces patient no-shows and improves clinic efficiency with minimal data handling.",
    extendedDescription: "The Appointment Reminder System is designed to streamline patient communication by automating the process of sending reminders for upcoming appointments. By utilizing email and SMS notifications, the system ensures patients are promptly reminded, reducing the likelihood of missed appointments. This not only improves clinic efficiency but also enhances patient satisfaction by demonstrating a commitment to their care. The system's automation reduces administrative workload, allowing staff to focus on more critical tasks. Moreover, by minimizing no-shows, the clinic can maintain a more consistent schedule, optimizing resource utilization and revenue. The system is designed with simplicity and compliance in mind, handling only essential scheduling information without storing sensitive patient data.",
    systemFunctionality: "The system will integrate with your existing scheduling software to automatically send reminders to patients via their preferred communication method, such as email or SMS. Administrators can customize the timing and content of reminders, and patients can confirm or reschedule appointments directly through the messages. The system will also provide analytics on reminder effectiveness and patient responsiveness.",
    faqs: [
      {
        question: "How does the Appointment Reminder System integrate with our current scheduling software?",
        answer: "The system is designed to seamlessly integrate with most existing scheduling platforms, allowing for automated synchronization of appointment data and streamlined reminder dispatch."
      },
      {
        question: "Can patients choose their preferred method of receiving reminders?",
        answer: "Yes, patients can select their preferred communication channel, whether it's email or SMS, ensuring they receive reminders in the most convenient way for them."
      },
      {
        question: "Is patient data secure with this system?",
        answer: "Absolutely, the system only uses essential scheduling information and adheres to strict data protection protocols to ensure patient privacy and compliance."
      },
      {
        question: "Can we customize the content and timing of reminders?",
        answer: "Yes, administrators have full control over the messaging content and can set the timing of reminders to best suit the clinic's and patients' needs."
      },
      {
        question: "Does the system handle appointment confirmations and rescheduling?",
        answer: "Yes, patients can confirm or request to reschedule appointments directly through the reminders, and the system will update the schedule accordingly."
      },
      {
        question: "What kind of analytics does the system provide?",
        answer: "The system offers insights into reminder delivery rates, patient responsiveness, and no-show statistics, helping you to continually optimize appointment management."
      }
    ],
    expectedTimeline: "Development and integration are expected to take approximately 6-8 weeks, including testing and staff training.",
    path: "/services/appointment-reminder-system"
  },
  {
    id: 3,
    image: EmployeeSchedulingImage,
    title: "Employee Scheduling App",
    heading: "Simplify Staff Management with Smart Scheduling",
    subheading: "Get the tool you need built for free. Pay monthly when you use it and cancel any time, no strings attached.",
    description: "An application for managing staff shifts, breaks, and rotations within a healthcare facility. Streamlines internal operations without involving patient data.",
    extendedDescription: "The Employee Scheduling App is a powerful yet simple tool built specifically for healthcare facilities that need to coordinate complex shift schedules across various roles and departments. It allows managers to easily assign shifts, track hours, and prevent scheduling conflicts. With this app, your clinic can ensure proper coverage without overworking staff, leading to improved morale and a healthier workplace culture. Employees get access to their schedules in real-time, can swap shifts (if approved), and receive reminders for upcoming work hours. This reduces confusion, last-minute changes, and administrative overhead. Because it doesn't handle any patient data, there are no compliance headaches, and the platform can be implemented quickly. Whether you're running a small clinic or a busy multi-practitioner practice, this tool will bring order and clarity to your staff management, freeing up time for higher-priority responsibilities and ultimately improving service delivery.",
    systemFunctionality: "The app will include a central dashboard where managers can create, edit, and publish staff schedules. Employees will have access to their personal calendars, can request time off, and swap shifts subject to manager approval. The system supports shift templates, recurring schedules, break tracking, and overtime alerts. Notifications are sent via email or SMS when changes occur. Everything is stored in a secure, role-based system accessible from both desktop and mobile devices.",
    faqs: [
      {
        question: "Can staff members request time off directly through the app?",
        answer: "Yes, staff can submit time-off requests from their dashboard, and managers can approve or deny them instantly, streamlining the approval workflow and reducing manual communication."
      },
      {
        question: "How does the app help avoid scheduling conflicts?",
        answer: "The system automatically flags overlapping shifts, overtime risks, and availability conflicts before schedules are published, helping managers make informed decisions quickly."
      },
      {
        question: "Is the app mobile-friendly?",
        answer: "Absolutely. The app is optimized for all screen sizes, allowing both managers and employees to access schedules, submit requests, and receive updates from any device at any time."
      },
      {
        question: "Can I set up repeating shifts or use shift templates?",
        answer: "Yes, the app allows you to create templates for common shift patterns and repeat them weekly or monthly, significantly reducing the time needed for manual scheduling."
      },
      {
        question: "Does the app track hours worked or calculate overtime?",
        answer: "Yes, the system logs assigned shift hours and flags any overtime situations, making it easier for HR or management to stay on top of labor regulations and budget concerns."
      },
      {
        question: "Will the app notify employees about schedule changes?",
        answer: "Yes, automatic notifications are sent via email or SMS whenever a change is made to an employee's schedule, so your team is always informed and up to date."
      }
    ],
    expectedTimeline: "Development and rollout typically take 6-8 weeks, including setup, testing, and onboarding staff into the system.",
    path: "/services/employee-scheduling-app"
  },
  {
    id: 4,
    image: TrainingTrackerImage,
    title: "Internal Training Tracker",
    heading: "Keep Your Team Certified, Skilled, and Compliant",
    subheading: "Build a smarter clinic by tracking employee growth, certifications, and compliance from one simple dashboard tailored to your internal processes.",
    description: "A dashboard for tracking staff training, certifications, and workshop participation. Supports compliance and professional development within the clinic.",
    extendedDescription: "The Internal Training Tracker is a comprehensive dashboard designed to ensure your healthcare team stays trained, certified, and compliant. This system allows clinic managers to track staff progress through required trainings, monitor certification expirations, and assign internal workshops. Whether it's onboarding new hires, managing mandatory compliance courses, or encouraging ongoing professional development, this tool provides full visibility across departments. By centralizing training records and automating reminders, you reduce the risk of missed renewals or non-compliance penalties. Employees can also view their own progress, access assigned materials, and receive upcoming deadline notifications — all from a clean, easy-to-use interface. This app is especially helpful for clinics that must adhere to regional regulations or internal performance standards. It replaces the clutter of spreadsheets and manual logging with a reliable, efficient system built to support a culture of growth and accountability. By streamlining the training lifecycle, you can focus on elevating care quality and ensuring every team member is prepared to perform at their best.",
    systemFunctionality: "Managers will have access to an admin panel where they can create training modules, upload materials, and assign certifications to staff members. The dashboard tracks completion status, deadlines, and certification renewal dates, and sends out reminders when actions are due. Employees can log into their personalized portal to view assigned trainings, access learning materials, complete assessments, and download certificates of completion. A reporting module will allow management to generate progress reports, filter by role or department, and export data for audits. The system will also include role-based permissions, mobile accessibility, and calendar integrations.",
    faqs: [
      {
        question: "Can the tracker handle different training requirements for different roles?",
        answer: "Yes, training assignments can be tailored based on roles, departments, or even individual employees, ensuring everyone receives the training that’s relevant to their responsibilities and compliance needs."
      },
      {
        question: "Will the system notify staff about upcoming certification renewals?",
        answer: "Absolutely. The tracker sends automated reminders to staff and supervisors when certifications are nearing expiration, helping avoid last-minute scrambles or lapses in compliance."
      },
      {
        question: "Can we upload our own internal training materials?",
        answer: "Yes, you can upload videos, PDFs, presentations, and even quiz modules. This gives you full flexibility to align the tracker with your clinic’s specific standards and procedures."
      },
      {
        question: "Is there reporting functionality for audits or compliance reviews?",
        answer: "Definitely. You can generate real-time reports by employee, department, training type, or completion status. Reports can be exported in PDF or CSV formats for audit readiness."
      },
      {
        question: "Do employees have access to their own training dashboards?",
        answer: "Yes, each staff member gets their own login where they can view assigned trainings, track progress, download certificates, and receive alerts about due dates or incomplete tasks."
      },
      {
        question: "Can we track participation in live workshops as well as online training?",
        answer: "Yes. You can manually log attendance for in-person sessions, upload related documents, and mark workshops as complete, allowing the system to track both live and digital formats."
      }
    ],
    expectedTimeline: "Development and deployment are typically completed in 6–9 weeks, including custom module setup and content integration.",
    path: "/services/internal-training-tracker"
  },
  {
    id: 5,
    image: FeedbackToolImage,
    title: "Clinic Feedback Collection Tool",
    heading: "Understand Your Patients Through Anonymous, Actionable Feedback",
    subheading: "Give patients a safe, anonymous space to share their experiences — and turn that feedback into meaningful improvements without breaching privacy.",
    description: "A system for collecting anonymous patient feedback post-appointments. Enhances clinic services through patient insights without requiring user accounts or sensitive data.",
    extendedDescription: "The Clinic Feedback Collection Tool empowers healthcare providers to gather honest, anonymous feedback from patients after their appointments — helping you pinpoint what’s working and where improvements are needed. This system prioritizes simplicity and privacy by avoiding account logins, data tracking, or personal identification, making patients more likely to participate freely. The tool can be delivered via email, SMS, or a QR code printed on receipts or posters around the clinic, linking to a secure, mobile-friendly form. Patients can rate services, leave comments, and answer customized questions about their experience. On the backend, your clinic staff can monitor real-time responses through a dashboard that categorizes feedback into actionable insights — from front desk friendliness and wait times to clarity of communication from medical staff. You’ll gain a clear, data-driven understanding of patient satisfaction trends and service gaps without violating HIPAA or local privacy regulations. Whether you use it to make internal adjustments, reward high-performing staff, or shape long-term strategy, this tool creates a healthy feedback loop that puts your patients’ voices at the center of your growth.",
    systemFunctionality: "The tool allows clinics to generate secure, anonymous feedback forms with customizable fields. After each appointment, a feedback link can be automatically sent via email or SMS, or displayed as a QR code in the clinic. Patients submit responses without needing to log in. An admin dashboard aggregates results, displaying average ratings, keyword trends, and categorized suggestions. You can filter results by service type, date, or department. Optional alerts can notify managers when low ratings or specific keywords (e.g., 'rude', 'long wait') are detected. No personal or medical data is collected or stored, keeping the system compliant with privacy standards.",
    faqs: [
      {
        question: "How does this tool ensure patient anonymity?",
        answer: "The system collects feedback without requiring names, login credentials, or appointment IDs. All data is stored in aggregate form, and no personally identifiable information is tracked, making it truly anonymous and privacy-compliant."
      },
      {
        question: "Can we customize the feedback form questions?",
        answer: "Yes, you can tailor the questions to suit your clinic's specific needs — including rating scales, open-text fields, and multiple-choice formats. This ensures you're gathering the most relevant insights from your patients."
      },
      {
        question: "How do patients access the feedback form?",
        answer: "You can share the form through automated SMS or email after appointments, or generate a QR code patients can scan while in the clinic. This flexibility boosts response rates by making the process easy and accessible."
      },
      {
        question: "Is any sensitive patient information stored in the system?",
        answer: "No. The system is designed to collect only general feedback, without storing names, health data, or appointment records. This keeps you aligned with HIPAA and similar privacy regulations without additional risk."
      },
      {
        question: "Can we analyze trends in feedback over time?",
        answer: "Absolutely. The dashboard includes filters for date ranges, service categories, and keywords. You can track improvements, identify recurring issues, and generate exportable reports to share with your team or leadership."
      },
      {
        question: "What happens when negative feedback is submitted?",
        answer: "Negative feedback is flagged in the admin dashboard, and optional email alerts can notify supervisors when certain ratings or keywords appear. This enables quick response and resolution before issues escalate."
      }
    ],
    expectedTimeline: "This tool typically takes 5–7 weeks to design, configure, and deploy, depending on customization needs and communication channels used.",
    path: "/services/clinic-feedback-tool"
  },
  {
    id: 6,
    image: InventoryTrackerImage,
    title: "Inventory Tracker for Small Clinics",
    heading: "Stay Stocked, Stay Ready — Manage Supplies Without the Headache",
    subheading: "Keep your clinic running smoothly with an automated inventory system designed for busy teams. No training required, no risk of stockouts, no stress.",
    description: "A tool to monitor and manage clinic supplies, alerting staff when items are low. Improves operational efficiency without involving patient information.",
    extendedDescription: "The Inventory Tracker for Small Clinics is a lightweight yet powerful solution designed to simplify supply management and ensure your clinic never runs out of essential items. From gloves and syringes to office materials and cleaning supplies, this system helps you keep everything organized and accounted for — without needing spreadsheets or manual logs. The intuitive dashboard lets staff quickly log supplies as they’re used, with built-in alerts for when items hit predefined low thresholds. You can customize categories, quantities, and even track expiration dates to reduce waste. Designed with small-to-medium healthcare teams in mind, this tool cuts down on guesswork, prevents over-ordering, and ensures you're always prepared for day-to-day operations. No sensitive data is handled, which keeps compliance concerns at bay and allows for fast deployment. Whether you're running a general practice, a dental clinic, or a physiotherapy office, this inventory tracker creates a smarter, more responsive supply chain — saving time, money, and frustration for everyone involved.",
    systemFunctionality: "The system includes an inventory dashboard with real-time counts of all categorized items. Staff can add, update, or remove inventory with a few clicks. Items are grouped by type (e.g., medical, office, cleaning), and restock thresholds trigger automated low-stock alerts via email or in-app notifications. The admin panel allows role-based access, so only authorized users can modify quantities or approve restock requests. The system also tracks expiration dates and generates weekly reports to identify items at risk of waste. Inventory history logs make audits simple and efficient.",
    faqs: [
      {
        question: "How does the inventory tracker notify us when items are low?",
        answer: "The system sends out automatic email and in-app notifications whenever a supply item drops below your custom-defined threshold, ensuring you're always aware before running out of stock."
      },
      {
        question: "Can we customize inventory categories for our clinic?",
        answer: "Yes, the system allows full customization of item categories, so you can organize your supplies according to how your clinic operates — whether that’s by room, department, or supply type."
      },
      {
        question: "Do we need to train staff to use this system?",
        answer: "Not at all. The tool is designed for ease of use, with a clean, intuitive interface that staff can use with minimal instruction. Most users are fully comfortable with it in under 30 minutes."
      },
      {
        question: "Does this system handle sensitive or patient-related data?",
        answer: "No. The inventory tracker is purely operational and does not interact with any patient data, which makes it fast to implement and keeps privacy compliance concerns to a minimum."
      },
      {
        question: "Can we track inventory expiration dates?",
        answer: "Yes. You can input expiration dates when adding or editing items, and the system will alert you when items are approaching expiry, helping reduce waste and ensure patient safety."
      },
      {
        question: "How often are inventory reports generated?",
        answer: "The system can generate automated inventory reports weekly or on a schedule you define. These reports include usage trends, restock alerts, and upcoming expirations — perfect for reviews and audits."
      }
    ],
    expectedTimeline: "Development and deployment typically take 6–8 weeks depending on clinic size, inventory complexity, and integration preferences.",
    path: "/services/inventory-tracker"
  },
]