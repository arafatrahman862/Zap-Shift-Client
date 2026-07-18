import {
    FaQuoteLeft,
    FaStar,
    FaRegStar,
    FaStarHalfAlt,
} from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const ReviewCard = ({ review }) => {
    const {
        userName,
        user_photoURL,
        ratings,
        review: testimonial,
        date,
    } = review;

    const renderStars = () => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (ratings >= i) {
                stars.push(<FaStar key={i} />);
            } else if (ratings >= i - 0.5) {
                stars.push(<FaStarHalfAlt key={i} />);
            } else {
                stars.push(<FaRegStar key={i} />);
            }
        }

        return stars;
    };

    return (
        <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-3 hover:border-primary/20 hover:shadow-2xl">

            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20"></div>

            {/* Quote */}
            <FaQuoteLeft className="text-5xl text-primary/15 transition-all duration-500 group-hover:scale-110 group-hover:text-primary" />

            {/* Review */}
            <p className="mt-6 line-clamp-5 text-[15px] leading-8 text-slate-600">
                "{testimonial}"
            </p>

            {/* Stars */}
            <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-1 text-xl text-yellow-400">
                    {renderStars()}
                </div>

                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    {ratings}/5
                </span>
            </div>

            {/* Divider */}
            <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

            {/* User */}
            <div className="flex items-center gap-4">

                <img
                    src={user_photoURL}
                    alt={userName}
                    className="h-16 w-16 rounded-full border-4 border-primary/20 object-cover transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                />

                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800">
                        {userName}
                    </h3>

                    <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                        <FiCalendar className="text-primary" />
                        {new Date(date).toLocaleDateString()}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ReviewCard;