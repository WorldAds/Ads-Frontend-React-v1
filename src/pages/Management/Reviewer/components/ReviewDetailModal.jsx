import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { XMarkIcon, CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const violationTypes = [
  { id: 'illegal', name: 'Illegal Content', description: 'Violates local laws and regulations' },
  { id: 'inappropriate', name: 'Inappropriate Content', description: 'Violates community standards' },
  { id: 'misleading', name: 'Misleading Information', description: 'False or misleading content' },
  { id: 'copyright', name: 'Copyright Issue', description: 'Infringes intellectual property' },
  { id: 'offensive', name: 'Offensive Content', description: 'Offends specific groups or cultures' },
  { id: 'other', name: 'Other Issues', description: 'Other violations' }
];

export default function ReviewDetailModal({ isOpen, onClose, content }) {
  const [decision, setDecision] = useState('');
  const [selectedViolations, setSelectedViolations] = useState([]);
  const [comment, setComment] = useState('');

  const handleViolationToggle = (violationId) => {
    setSelectedViolations(prev => {
      if (prev.includes(violationId)) {
        return prev.filter(id => id !== violationId);
      }
      return [...prev, violationId];
    });
  };

  const handleSubmit = () => {
    console.log('Submit review result:', {
      decision,
      violations: selectedViolations,
      comment
    });
    onClose();
  };

  if (!content) return null;

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
                <h2 className="text-xl font-semibold gradient-text">Content Review</h2>
                <div className="flex items-center mt-2 space-x-4">
                  <span className="text-sm text-gray-400">ID: {content.id}</span>
                  <span className="text-sm text-gray-400">Language: {content.language}</span>
                  <span className="text-sm text-gray-400">Region: {content.region}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-2 -mr-2">
              {/* Content Preview */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Content Preview</h3>
                <div className="p-4 rounded-lg bg-gray-800/50">
                  <div className="aspect-video bg-gray-700 rounded-lg mb-4">
                    {/* Ad Preview Area */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Ad Preview Area
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white font-medium">{content.title}</p>
                    <p className="text-gray-400">{content.description}</p>
                  </div>
                </div>
              </div>

              {/* Review Decision */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Review Decision</h3>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    className={`p-4 rounded-lg border transition-all ${
                      decision === 'approve'
                        ? 'bg-green-500/20 border-green-500 text-green-400'
                        : 'bg-gray-800/50 border-gray-700 hover:border-green-500/50 text-gray-400'
                    }`}
                    onClick={() => setDecision('approve')}
                  >
                    <CheckCircleIcon className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-medium">Approve</p>
                    <p className="text-sm opacity-80">Content meets standards</p>
                  </button>
                  <button
                    className={`p-4 rounded-lg border transition-all ${
                      decision === 'reject'
                        ? 'bg-red-500/20 border-red-500 text-red-400'
                        : 'bg-gray-800/50 border-gray-700 hover:border-red-500/50 text-gray-400'
                    }`}
                    onClick={() => setDecision('reject')}
                  >
                    <XCircleIcon className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-medium">Reject</p>
                    <p className="text-sm opacity-80">Content violates standards</p>
                  </button>
                  <button
                    className={`p-4 rounded-lg border transition-all ${
                      decision === 'review'
                        ? 'bg-yellow-500/20 border-yellow-500 text-yellow-400'
                        : 'bg-gray-800/50 border-gray-700 hover:border-yellow-500/50 text-gray-400'
                    }`}
                    onClick={() => setDecision('review')}
                  >
                    <ExclamationTriangleIcon className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-medium">Needs Review</p>
                    <p className="text-sm opacity-80">Requires more opinions</p>
                  </button>
                </div>
              </div>

              {/* Violation Types */}
              {decision === 'reject' && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Violation Types</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {violationTypes.map(type => (
                      <button
                        key={type.id}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          selectedViolations.includes(type.id)
                            ? 'bg-purple-500/20 border-purple-500 text-purple-400'
                            : 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50 text-gray-400'
                        }`}
                        onClick={() => handleViolationToggle(type.id)}
                      >
                        <p className="font-medium">{type.name}</p>
                        <p className="text-sm opacity-80">{type.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Review Comments */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Review Comments</h3>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full h-32 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  placeholder="Enter detailed review comments..."
                />
              </div>

              {/* Review Guidelines */}
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <h4 className="text-blue-400 font-medium mb-2">Review Guidelines</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Carefully check if content complies with local laws and regulations</li>
                  <li>• Ensure content respects different cultures and religious beliefs</li>
                  <li>• Verify content contains no discrimination, violence, or inappropriate information</li>
                  <li>• If in doubt, choose the &quot;Needs Review&quot; option</li>
                </ul>
              </div>
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
                className={`hero-button ${!decision ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!decision}
              >
                Submit Review
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

ReviewDetailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired
  })
};
