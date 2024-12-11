import Input from "@/app/components/Input/Input";

const Register = () => {
  return (
    <div className="flex justify-center items-center flex-grow">
      <form action="" className=" bg-primary-light p-4 w-fit rounded-sm">
        <div className="flex flex-col gap-4">
          <Input title="Name" type="text" placeholder="Enter your name..." />
          <Input title="Email" type="email" placeholder="Enter your email..." />
          <Input title="Password" type="password" />
          <Input title="Re-type Password" type="password" />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
