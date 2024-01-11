import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Partner from "./partner";
import { selectAllPartners } from './partnersSlice';


const PartnersList = () => {
    const partners = useSelector(selectAllPartners);
    return (
        <Col>
            {partners.map(
                ((partner) => {
                    return (
                        <div className='d-flex mb-5' key={partner.id}>

                            <Partner partner={partner} />
                        </div>
                    )
                })
            )}
        </Col>
    )
}


export default PartnersList