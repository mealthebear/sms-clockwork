import { createMessageRecord } from '../../../database/tables/messages/createMessageRecord.mjs';
import pkg from "twilio";
const { Twilio } = pkg;

type PhoneNumber = `+1${string}`;
type BodyText = string;
type RecipientData = { phoneNumber: PhoneNumber; bodyText: BodyText };
type TenantList = RecipientData[];

const createSMSPromise = async (
  recipientPhoneNumber: PhoneNumber,
  bodyText: string
): Promise<void> => {
    const TWILIO_SID = process.env.TWILIO_SID;
    const TWILIO_TOKEN = process.env.TWILIO_TOKEN;
    const SENDER_PHONE_NUMBER = process.env.SENDER_PHONE_NUMBER;

    const client = new Twilio(TWILIO_SID, TWILIO_TOKEN);

    const messageDetails = {
      phoneNumber: recipientPhoneNumber,
      bodyText: bodyText,
    };
    try {
      await client.messages.create({
        from: `${SENDER_PHONE_NUMBER}`,
        to: `${recipientPhoneNumber}`,
        body: `${bodyText}`,
      });
      createMessageRecord(messageDetails, true);
    } catch (err) {
      createMessageRecord(messageDetails, false);
    }
};

export const createSMSPromiseList = (
  tenantList: TenantList
): void => {
  for (let index = 0; index < tenantList.length; index++) {
    const recipientPhoneNumber = tenantList[index].phoneNumber;
    const bodyText = tenantList[index].bodyText;

    createSMSPromise(recipientPhoneNumber, bodyText);
  }
};

export default { createSMSPromiseList };
