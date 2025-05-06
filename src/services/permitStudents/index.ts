/* eslint-disable @typescript-eslint/no-explicit-any */
export const getStudentPermits = async (email: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/permits/get/${email}`,
      {
        next: {
          tags: ["PRODUCT"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return { status: false, message: error.message };
  }
};
