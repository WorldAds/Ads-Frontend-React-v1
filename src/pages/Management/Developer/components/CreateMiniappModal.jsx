import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/outline";

const categories = [
  "Tools",
  "Lifestyle",
  "Social & Communication",
  "Games & Entertainment",
  "Education & Training",
  "E-commerce & Retail",
  "Others"
];

export default function CreateMiniappModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    worldAppId: "",
    category: "Tools",
    description: "",
    privacyUrl: "",
    serviceUrl: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
    // Reset form
    setFormData({
      name: "",
      worldAppId: "",
      category: "Tools",
      description: "",
      privacyUrl: "",
      serviceUrl: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
            className="relative bg-gray-900 rounded-lg p-6 w-full max-w-2xl shadow-xl max-h-[90vh] flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold gradient-text">Connect World Mini App</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-2 -mr-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Mini App Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="Enter World Mini App name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">World App ID</label>
                  <input
                    type="text"
                    name="worldAppId"
                    value={formData.worldAppId}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="Enter World App ID"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    App ID obtained from World Developer Platform
                  </p>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 h-32"
                    placeholder="Enter mini app description"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Privacy Policy URL</label>
                  <input
                    type="url"
                    name="privacyUrl"
                    value={formData.privacyUrl}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="https://"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Terms of Service URL</label>
                  <input
                    type="url"
                    name="serviceUrl"
                    value={formData.serviceUrl}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="https://"
                    required
                  />
                </div>
              </form>
            </div>

            <div className="flex justify-end space-x-4 pt-6 mt-6 border-t border-gray-800">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="hero-button"
              >
                Connect
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

CreateMiniappModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
