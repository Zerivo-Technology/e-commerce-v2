import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { registerUser } from "../lib/actions";

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
      Register
    </Button>
  );
}

export default function FormRegister() {
  const [state, formRegister] = useFormState(registerUser, initialState);

  return (
    <form action={formRegister} className="flex flex-col px-5 w-full xl:w-1/3 md:w-1/2 space-y-3">
      {state.errorTitle !== null && (
        <div className=" bg-red-500 w-full p-4 rounded-lg text-white">
          <div className="font-bold mb-4">{state.errorTitle}</div>

          <ul className="list-disc list-inside">
            {state.errorDesc?.map((value, index) => (
              <li key={index + value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
      <input type="email" name="email" placeholder="Masukan Email Anda..." className="focus:outline-none" />
      <input type="text" name="name" placeholder="Masukan Nama Lengkap Anda..." className="focus:outline-none" />
      <input type="password" name="password" placeholder="Masukan Password..." className="focus:outline-none" />
      <SubmitButton />
    </form>
  );
}
