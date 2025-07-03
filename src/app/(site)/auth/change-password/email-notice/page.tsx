
export default function ChangePasswordEmailNotice() {


  return (

    <div className="min-h-screen bg-pa-background flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md space-y-4">
        <h1 className=" text-center text-2xl font-bold text-gray-800">Check Your Email</h1>
        <div className=" text-center space-y-2 text-gray-700">
          <p>You should have received an email with a code</p>
          <p>Check your spam/junk folder if unable to find the emails</p>
        </div>
      </div>
    </div>

  );
}