const PurchaseButton = () => {
  return (
    <>
      <div
        data-message=""
        className="container mx-auto max-w-[1168px] px-4 mb-20 pb-12"
      >
        <button onClick={() => alert("Nice!")} className="flex mx-auto mt-16 rounded-full sm:py-3 sm:px-6 py-3 px-5 text-white font-bold shadow-md bg-green-700">
          Get The Bundle of 2 Ebooks Now
        </button>
      </div>
    </>
  );
};

export default PurchaseButton;
