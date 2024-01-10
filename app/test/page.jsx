const page = () => {
  const handleform = async (formData) => {
    "use server";
    console.log(formData);
    console.log("Hello");
  };

  return (
    <div>
      <form action={handleform}>
        <input type="text" name="username" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default page;
