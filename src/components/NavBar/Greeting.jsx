// import PropTypes from 'prop-types'
import "./greeting.css";
const Greeting = ({ data }) => {
    var hour = new Date().getHours();
    var partOfDay = "";
    if (hour < 12) {
        partOfDay = "morning";
    }
    else if (hour < 17) {
        partOfDay = "afternoon"
    }
    else {
        partOfDay = "evening"
    }

    return (
        <h6 className="text-bg-light">
            Good {partOfDay}, <strong> {data.name} 👋</strong>
        </h6>
    );
};

export default Greeting;

// import PropTypes from 'prop-types'

// const Greeting = ({ name }) => {

//     return (<h6>Good Afternoon, <strong> {name} 👋</strong>
//     </h6>
//     );
// };

// Greeting.PropTypes = {
//     name: PropTypes.string,
// }

// export default Greeting;
