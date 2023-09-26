const SendEmailButton = () => {
    
        const recipientEmail = "dlauko96@gmail.com";
        const subject = "Subject";
        const body = "Body";
        const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
      
        window.location.href = mailtoUrl;
      
    
  

};

export default SendEmailButton;
