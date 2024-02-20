import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <section id="contact" className="sm:w-full w-screen absolute top-32 ">
      <motion.div
        className="font-playfair text-3xl mt-11 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1>
          Contact <span className="text-purple-700">Me</span>
        </h1>
      </motion.div>
      <motion.div
        className="div"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <form
          action="https://formsubmit.co/9020304914af45f0e8671b749ce56c21"
          className="sm:w-1/2 w-full font-opensans text-lg font-semibold mx-auto"
          // onSubmit={onSubmit}
          method="POST"
        >
          <div className="flex flex-col mt-3">
            <label htmlFor="">Name:-</label>
            <input
              type="text"
              className=" w-full outline-none px-2 py-4 rounded-md bg-purple-100 text-purple-700 placeholder-opaque-black"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-2 text-red-600">
                {errors.name.type === "required" && "This is required"}
                {errors.name.type === "maxLength" && "Max char length is 100"}
              </p>
            )}
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="">Email:-</label>
            <input
              type="text"
              className=" w-full outline-none px-2 py-4 rounded-md bg-purple-100 text-purple-700 placeholder-opaque-black"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="">Message:-</label>
            <textarea
              className="w-full outline-none px-2 py-4 rounded-md bg-purple-100 text-purple-700 placeholder-opaque-black"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
          </div>
          <button
            className="p-5 bg-purple-200 mt-5 font-bold transition duration-500 font-opensans hover:text-white hover:bg-purple-700"
            type="submit"
          >
            SEND ME A MESSAGE
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
