import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { handleLogin } from "../lib/action";

export interface ActionResult {
  errorTitle: string | null;
  errorDesc: string[] | null;
}

const initialState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      Login
    </Button>
  );
}

export default function FormLogin() {
  const [state, formLogin] = useFormState(handleLogin, initialState);

  return (
    <form action={formLogin} className="flex flex-col space-y-6 shadow-xl px-5 py-10 rounded-xl bg-white">
      <h2 className="text-center font-semibold text-2xl mb-10">Log in</h2>

      {state.errorTitle !== null && (
        <div className=" bg-red-500 w-full p-4 rounded-lg text-white">
          <div className="font-bold mb-4">{state.errorTitle}</div>

          <ul className="list-disc list-inside">
            {state.errorDesc?.map((value: string, index: string) => (
              <li key={index + value}>{value}</li>
            ))}
          </ul>
        </div>
      )}

      <input type="text" name="email" placeholder="Email ..." className="pb-3 pt-1 px-1 mx-3 border-b-2 border-gray-500 focus:outline-none " />

      <input type="password" name="password" placeholder="Password ..." className="pb-3 px-1 mx-3 border-b-2 border-gray-500 focus:outline-none" />
      <p className="text-xs pr-2 w-full flex flex-row justify-end items-center gap-1">
        <a href="/reset" className="text-blue-500">
          Forgot Password ?
        </a>
      </p>
      <SubmitButton />
      <div className="flex flex-row w-full gap-2 ">
        <Button className="bg-red-400 text-white w-1/2">Google</Button>
        <Button className="bg-blue-400 text-white w-1/2">Facebook</Button>
      </div>
      <p className="text-xs w-full flex flex-row justify-center items-center gap-1">
        Dont Have Account ? {"  "}
        <a href="/register" className="text-blue-400">
          Register here !
        </a>
      </p>
    </form>
  );
}
