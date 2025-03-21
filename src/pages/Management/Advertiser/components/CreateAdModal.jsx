import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createAd } from "../../../../api/service";
import { useToast } from "../../../../hooks/use-toast.jsx";

const adTypes = [
  {
    id: "personal",
    name: "Personal User",
    description: "Display ads to World App users",
    features: ["Precise User Targeting", "Interactive Rewards", "Real-time Data Feedback"]
  },
  {
    id: "device",
    name: "Ad Screen",
    description: "Display ads on offline LED screens",
    features: ["High Traffic Locations", "Large Screen Display", "Geographic Targeting"]
  },
  {
    id: "miniapp",
    name: "Mini App",
    description: "Display ads in World mini apps",
    features: ["Scenario-based Delivery", "User Behavior Triggers", "Diverse Display Formats"]
  }
];

export default function CreateAdModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    budget: "",
    startDate: "",
    endDate: "",
    targetAudience: "",
    locations: "",
    creativeType: "image",
    creativeUrl: ""
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await createAd(formData);
      
      toast({
        title: "Success",
        description: "Advertisement created successfully!",
        variant: "success",
      });
      
      setTimeout(() => {
        setFormData({
          name: "",
          budget: "",
          startDate: "",
          endDate: "",
          targetAudience: "",
          locations: "",
          creativeType: "image",
          creativeUrl: ""
        });
        setStep(1);
        setSelectedType(null);
        onClose();
      }, 100);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to create advertisement. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (step === 1 && selectedType) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-gray-900 rounded-lg p-6 w-full max-w-4xl shadow-xl max-h-[90vh] flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold gradient-text">Create Ad</h2>
                <p className="text-gray-400 mt-1">
                  {step === 1 ? "Select Ad Type" : "Set Ad Details"}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-2 -mr-2">
              {step === 1 ? (
                // Step 1: Select Ad Type
                <div className="grid grid-cols-3 gap-6">
                  {adTypes.map(type => (
                    <div
                      key={type.id}
                      className={`p-6 rounded-lg border transition-all cursor-pointer ${
                        selectedType === type.id
                          ? "bg-purple-500/20 border-purple-500"
                          : "bg-gray-800/50 border-gray-700 hover:border-purple-500/50"
                      }`}
                      onClick={() => setSelectedType(type.id)}
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">{type.name}</h3>
                      <p className="text-gray-400 mb-4">{type.description}</p>
                      <ul className="space-y-2">
                        {type.features.map((feature, index) => (
                          <li key={index} className="text-sm text-gray-400">• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                // Step 2: Ad Details Form
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 mb-2">Ad Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                        placeholder="Enter ad name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Budget</label>
                      <input
                        type="number"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                        placeholder="Enter budget amount"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 mb-2">Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">End Date</label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">Target Audience</label>
                    <input
                      type="text"
                      name="targetAudience"
                      value={formData.targetAudience}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                      placeholder="Describe target audience"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">Locations</label>
                    <input
                      type="text"
                      name="locations"
                      value={formData.locations}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                      placeholder="Enter target locations"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">Creative Type</label>
                    <select
                      name="creativeType"
                      value={formData.creativeType}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="image">Image Ad</option>
                      <option value="video">Video Ad</option>
                      <option value="html">HTML Ad</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">Creative URL</label>
                    <input
                      type="url"
                      name="creativeUrl"
                      value={formData.creativeUrl}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                      placeholder="Enter creative material URL"
                      required
                    />
                  </div>
                </form>
              )}
            </div>

            <div className="flex justify-end space-x-4 pt-6 mt-6 border-t border-gray-800">
              {step === 2 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-800 transition-colors"
                  disabled={loading}
                >
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-800 transition-colors"
                disabled={loading}
              >
                Cancel
              </button>
              {step === 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className={`hero-button ${!selectedType ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={!selectedType || loading}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className={`hero-button ${loading ? "opacity-50 cursor-wait" : ""}`}
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Ad"}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

CreateAdModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
