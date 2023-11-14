import React,{useState} from "react"; 


const plans = [
  {
    name: "Food",
  },
  {
    name: "Medical",
  },
  {
    name: "Drinking Water",
  },
  {
    name: "Toilets",
  },
  {
    name: "Gyms",
  },
  {
    name: "Others",
  },
];

export default function Example() {
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [feedback, setFeedback] = useState(null);

  const togglePlan = (plan) => {
    if (selectedPlans.includes(plan)) {
      setSelectedPlans(selectedPlans.filter((selected) => selected !== plan));
    } else {
      setSelectedPlans([...selectedPlans, plan]);
    }
  };
  const handleFeedback = (value) => {
    setFeedback(value);
  };

  return (
    <>
      <h2 className="flex justify-center items-center ">Share your Issues</h2>
      <div className="grid justify-center items-center grid-cols-2 gap-4 px-4 py-16 mx-auto"  >
        {plans.map((plan) => (
          <React.Fragment key={plan.name}>
            <div
              className={`relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none ${
                selectedPlans.includes(plan)
                  ? "bg-red-900/75 text-white"
                  : "bg-white"
              }`}
              onClick={() => togglePlan(plan)}
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <div className="text-sm">
                    <p
                      className={`font-medium ${
                        selectedPlans.includes(plan)
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {plan.name}
                    </p>
                    {/* Description can be added here */}
                  </div>
                </div>
                {selectedPlans.includes(plan) && (
                  <div className="shrink-0 text-white">
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleFeedback("Satisfied")}
                className="inline-flex items-center px-4 py-2 font-semibold tracking-tighter transition duration-500 ease-in-out transform bg-green-500 border rounded-lg text-md hover:text-white hover:bg-green-600 focus:shadow-outline"
              >
                Satisfied
              </button>
              <button
                onClick={() => handleFeedback("Unsatisfied")}
                className="inline-flex items-center px-4 py-2 font-semibold tracking-tighter transition duration-500 ease-in-out transform bg-red-500 border rounded-lg text-md hover:text-white hover:bg-red-600 focus:shadow-outline"
              >
                Unsatisfied
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
