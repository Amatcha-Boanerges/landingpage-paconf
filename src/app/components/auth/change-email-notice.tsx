import Button from "@/app/components/ui/Button";

export default function ChangeEmailNotice() {



  return (

    <div className="min-h-screen bg-pa-background flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md space-y-4">
        <h1 className=" text-center text-2xl font-bold text-gray-800">Check Your Email</h1>
        <div className=" text-center space-y-2 text-gray-700">
          <p>You should have received an 2 email, one from your old email and on from your new email, with a link to change your email. You must click on the link from both emails to change your email</p>
          <p>Check your spam/junk folder if unable to find the emails</p>

          <Button
            type="submit"
            variant="secondary" size='md'>
            Resend Emails (currently not working)
          </Button>

        </div>
      </div>
    </div>

  );
}