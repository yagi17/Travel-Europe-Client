const ExtraSection = () => {
  return (
    <div className="mt-10 grid md:grid-cols-2 gap-6 w-10/12 mx-auto">
      <div className="w-full py-4 mx-auto space-y-2 text-black border-t-4 border-gray-600 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-5">F A Q</h2>
        <div className="collapse collapse-arrow bg-blue-300 mt-10">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How Can I Book ?
          </div>
          <div className="collapse-content">
            <p>You can book through our website or email</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-blue-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I book from outside Europe ?
          </div>
          <div className="collapse-content">
            <p>Yes you can Book from any where</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-blue-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Is there any discount for students ?
          </div>
          <div className="collapse-content">
            <p>We don't have any discount at this moment</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-blue-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Is there any discount for students ?
          </div>
          <div className="collapse-content">
            <p>We don't have any discount at this moment</p>
          </div>
        </div>
      </div>
      <div className="border-t-4 py-4 border-gray-600 rounded-lg">
        <section className="w-12/12 mx-auto text-black">
          <div className="py-2 px-4 mx-auto max-w-screen-md">
            <div className="w-full rounded-lg text-3xl font-bold text-center">
              <p>Get In Touch</p>
            </div>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-black font-medium"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@domain.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm text-black font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>

              <button
                type="submit"
                className=" btn hover:bg-transparent bg-transparent w-full mx-auto py-3 px-5 text-sm font-medium text-center border-2 border-green-600 rounded-lg "
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExtraSection;
