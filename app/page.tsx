import Nav from "@/components/ui/Nav/Nav";
import HeaderText from "@/components/ui/HeaderText/HeaderText";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-1 flex-col bg-[#f8f6f1] p-6 pt-0 font-sans">
        <HeaderText
          header="What are we eating today?"
          subHeader="Let the wheel decide."
        />
      </div>
    </>
  );
}
