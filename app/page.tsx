import PasswordInput from "@/components/PasswordInput";
import PasswordInputMUI from "@/components/PasswordInputMUI";
import PasswordInputTailwind from "@/components/PasswordInputTailwind";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2">
        <PasswordInput />
        <div>
          <PasswordInputTailwind />
        </div>
        <PasswordInputMUI size="small" />
      </div>
    </main>
  );
}
