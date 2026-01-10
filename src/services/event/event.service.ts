/* eslint-disable @typescript-eslint/no-explicit-any */
export const createEvent = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  const payload = {
    eventName: formData.get("eventName"),
    date: formData.get("date"),
    category: formData.get("category"),
    location: formData.get("location"),
    minParticipants: formData.get("minParticipants"),
    joiningFee: formData.get("joiningFee"),
    description: formData.get("description"),
  };
};
