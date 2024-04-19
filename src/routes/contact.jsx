import { Form, useParams } from "react-router-dom";

export default function Contact() {
  const params = useParams();

  return (
    <div
      id="contact"
      className="no-scrollbar overflow-scroll h-svh w-[calc(1280px-448px)] flex-1"
      >
          
      <p className="text-3xl text-slate-500  font-bold">{params.contactId}</p>
    </div>
  );
}
