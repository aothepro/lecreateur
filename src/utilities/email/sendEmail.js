const superagent = require("superagent");

export const sendEmail = ({ name, email, contactNumber, details }) => {
  const sendGridUrl = "https://api.sendgrid.com/v3/mail/send";

  return superagent
    .post(sendGridUrl)
    .set({
      Authorization:
        "Bearer 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",
      "Content-Type": "application/json",
    })
    .send({
      personalizations: [
        {
          to: [
            {
              email: "lecreateurjewel@outlook.com",
            },
          ],
        },
      ],
      from: {
        email: "ao356@live.com",
      },
      subject: "Message from Le Createur Contact form",
      content: [
        {
          type: "text/html",
          value:
            "<h1>Receive request:</h1><br>" +
            "<h2>Name: </h2>" +
            name +
            "<br>" +
            "<h2>Email: </h2>" +
            email +
            "<br>" +
            "<h2>Contact: </h2>" +
            contactNumber +
            "<br>" +
            "<h2>Details: </h2>" +
            details +
            "<br>",
        },
      ],
    });
};
