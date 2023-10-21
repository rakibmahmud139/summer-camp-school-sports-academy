
const Title = ({ heading, subHeading }) => {
    return (
        <div className="text-center mb-12 mt-20">
            <h3 className="text-2xl md:text-3xl uppercase text-accent">{heading}</h3>
            <p className="text-pink-600 capitalize">*** {subHeading} ***</p>
        </div>
    );
};

export default Title;