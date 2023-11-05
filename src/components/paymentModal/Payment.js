import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Payment({ isOpen, setIsOpen, price }) {
  function closeModal() {
    setIsOpen(false);
  }
  const loadScript=async(src)=>{
    return new Promise((resolve)=>{
      const script=document.createElement("script");
      script.src=src;
      script.onload=()=>resolve(true);
      script.onerror=()=>resolve(false);

      document.body.appendChild(script);
    })
  }
  const launchRazorpay =async () => {
    const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if(!res){
      alert("You are not online!");
      return;
    }

    let options = {
      key: "rzp_test_PbhUbGnZaA2pm5",
      amount: price * 100,
      currency: "INR",
      name: "Movies Hub",
      description: "Rent or Buy a Movie",
      image:
        "https://lh3.googleusercontent.com/m0T5pBN2VgwdbWqJCHj75qsgIXIZEf8TPtfSK3el65lxNnoxMJwF9GwEwysG-vq9Fag",
      handler: () => {
        setIsOpen(false);
        alert("Payment Successfull");
      },
      theme: { color: "#c424d" },
    };
    let razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Please make a Payment
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Hello please click on the button to make the payment.
                  </p>
                </div>

                <div className="w-full mt-4">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white-500 bg-red-500 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={launchRazorpay}
                  >
                    Pay ₹{price}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700 bg-red-100 border border-transparent rounded-md "
                    onClick={closeModal}
                  >
                    Cancel Payment
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
