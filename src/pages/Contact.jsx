import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const showForm = () => {
    document.getElementById("contactForm").classList.remove("hidden");
  };
  return (
    <div className="bg-[#242424] text-white">
      <div className="container py-5">
        <div className="flex flex-col items-center gap-4 ">
          <h2 className="font-bold text-[40px] leading-10 md:w-[607px] w-[307px] text-center">
            Contact Us
          </h2>
          <h4 className="text-secondaryColor text-xl leading-8 md:w-[607px] w-[307px] text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </h4>
          <button
            onClick={showForm}
            className="text-sm font-bold leading-6 bg-[#203682] rounded-lg px-5 py-3 text-white hover:text-primaryColor hover:bg-gray-400 border-1 border-primaryColor "
          >
            YOUR MESSAGE
          </button>
          <div className="flex flex-row gap-1">
            <button className="hover:text-white hover:bg-gray-300 rounded-full p-2 bg-[#203682]">
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                style={{ color: "#ffffff" }}
              />
            </button>
            <button className="hover:text-white hover:bg-gray-300 rounded-full p-2 bg-[#203682]">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                style={{ color: "#ffffff" }}
              />
            </button>
            <button className="hover:text-white hover:bg-gray-300 rounded-full p-2 bg-[#203682]">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
          <form
            id="contactForm"
            className="hidden rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex-col flex bg-[#F9F9F9] sm:w-[607px] w-[387px] sm:p-20 p-5 gap-5 rounded-lg">
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Discord @Username"
                className="p-2 rounded-xl"
              />
              {errors.name && <span>UserName Required</span>}
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="p-2 rounded-xl"
              />
              {errors.email && <span>Email Address Required</span>}
              <textarea
                {...register("message", { required: true })}
                type="text"
                placeholder="Your Message"
                className="px-2 py-5 rounded-xl"
              />
              {errors.message && <span>Message Required</span>}
              <button
                type="submit"
                className="text-sm font-bold leading-6 bg-[#203682] rounded px-5 py-3 text-white hover:text-primaryColor hover:bg-gray-400 border-1 border-primaryColor"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
