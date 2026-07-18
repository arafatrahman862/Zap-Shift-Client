import { FiNavigation } from "react-icons/fi";

const CurrentLocationButton = ({ loading, onLocate }) => {
    return (
        <button
            onClick={onLocate}
            className="btn btn-primary btn-circle absolute bottom-5 right-5 z-[1000] shadow-xl"
        >
            {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
            ) : (
                <FiNavigation size={20} />
            )}
        </button>
    );
};

export default CurrentLocationButton;