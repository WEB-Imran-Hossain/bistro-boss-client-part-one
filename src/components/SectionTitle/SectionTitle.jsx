const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center md:w-4/12 mx-auto my-8">
            <p className="text-yellow-600 font-Inter text-lg mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl font-Inter uppercase border-y-2 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
