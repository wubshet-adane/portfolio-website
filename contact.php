<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_post['submit'])){
        // Get form data
        $fullname = $_POST['fullname'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Set the recipient email address
        $to = "0967490154w@gmail.com";  // Replace with your actual email address

        // Set the email subject
        $subject = "New message from your website contact form";

        // Create the email content
        $email_content = "Full Name: $fullname\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Message: $message\n";

        // Create email headers
        $headers = "From: $email";

        // Send the email
        if (mail($to, $subject, $email_content, $headers)) {
            echo "Thank you for contacting us! We will get back to you soon.";
        } else {
            $error = "Sorry, something went wrong. Please try again later.";
            header("Location: contact.html?error=" . urlencode($error));
            exit;
        }
    }
    else {
        $error = "Something went wrong, unsuccessfuly completed!!!";
        header("Location: contact.html?error=" . urlencode($error));
        exit;
    }
}
?>
