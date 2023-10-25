import useAllClass from '../../hooks/useClass';
import SingleClass from './SingleClass';

const Classes = () => {
    const [allClass] = useAllClass();

    return (
        <div>
            <h3 className="text-accent text-center text-xl md:text-3xl uppercase mt-20 mb-12">Here the all our classes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    allClass.map(singleClass => <SingleClass
                        key={singleClass._id}
                        singleClass={singleClass}
                    />)
                }


                {/* <PaginationComponent data={classes} itemsPerPage={6} /> */}
            </div>
        </div>
    );
};

export default Classes;