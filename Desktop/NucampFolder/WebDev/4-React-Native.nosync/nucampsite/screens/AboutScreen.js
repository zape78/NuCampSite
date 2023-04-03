import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text, ListItem, Avatar } from 'react-native-elements';
import PARTNERS from '../shared/partners';

const AboutScreen = () => {
    const [partners, setPartners] = useState(PARTNERS);
    return (
        <ScrollView>
            <Mission />
            <Card>
                <Card.Title>
                    Community Partners
                </Card.Title>
                <Card.Divider />
                {PARTNERS.map((partner) => {
                    return (
                        <ListItem key={partner.id} >
                            <Avatar source={partner.image} rounded />
                            <ListItem.Content>
                                <ListItem.Title>
                                    {partner.name}
                                </ListItem.Title>
                                <ListItem.Subtitle>
                                    {partner.description}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })}
            </Card>
        </ScrollView>
    );
};

const Mission = () => {
    return (
        <Card style={{ margin: 10 }}>
            <Card.Title>
                Our Mission
            </Card.Title>
            <Card.Divider />
            <Text>
                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
            </Text>
        </Card>
    );
};

export default AboutScreen;