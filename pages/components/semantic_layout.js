import React, { useEffect, useState } from "react";
import { Container, Input, Card, Icon } from "semantic-ui-react";


const SemanticUICard = ({ conversation }) => {
  const [query, setQuery] = useState("")
  const [numSpeakers, setNumSpeakers]= useState(null)
  const [language, setLanguage]= useState("")
  const [allSegments, setAllSegments]= useState([])



  useEffect(() => {
    console.log('conversation @ effect :>> ', conversation)
    const { num_speakers, segments, language} = conversation
    setNumSpeakers(num_speakers)
    setLanguage(language)
    setAllSegments(segments)
  }, [conversation])

  const separateBySpeakers = () => {
    // fer un estat per cada speaker
    // tot el text anira a una carta diferent
  }

  // Stastiscs component
  // contar quantes vegades es

  // funcions:
  // emmagatzematge sine die barat
  // search --> colorin 
  // chat 
  // alarmes paraules clau (Statistic)
  /// contador paraules clau (Statistic) --> colorines
  // 
  // afegir text de: millorar vendes, millorar, productivitat,...
  // el primer pas cap a l'automatitzacio total
  // 
  // objectiu final:
  // entrenar un LLM propi de tracte exquisit amb l'experienciad e totes les trucades de tots els agents



  const data = [
    {
      image:
        "https://syn-charging-assets.s3-eu-west-1.amazonaws.com/helsinki_noise_level.jpg",
      header: "Noise Level",
      meta: "Free",
      description: "Noise level observed in several locations..",
      city: "Helsinki",
      extra: (
        <a>
          <Icon name="pin" />
          Helsinki
        </a>
      )
    },
    {
      image:
        "https://iot-data-marketplace.com/charging/media/assets/f08f04cb-035f-4c4a-aaf2-f79defbd44c0/DockingSta__DockingSta__bikehire-dub.jpg",
      header: "Docking Stations",
      meta: "Free",
      city: "Manchester",
      description:
        "Information about dublinbikes Cycle Share Scheme Stations provided by JCDecaux.",
      extra: (
        <a>
          <Icon name="pin" />
          Manchester
        </a>
      )
    },
    {
      image:
        "https://syn-charging-assets.s3-eu-west-1.amazonaws.com/santander_museums.jpg",
      header: "Museums",
      meta: "Free",
      description: "List of Museums (as PoIs) located in Santander.",
      city: "Santander",
      extra: (
        <a>
          <Icon name="pin" />
          Santander
        </a>
      )
    },
    {
      image:
        "https://syn-charging-assets.s3-eu-west-1.amazonaws.com/manchester_parking.jpg",
      header: "Parking Status",
      meta: "Free",
      description: "Current status of tracked parking spots in Manchester.",
      city: "Manchester",
      extra: (
        <a>
          <Icon name="pin" />
          Manchester
        </a>
      )
    },
    {
      image:
        "https://iot-data-marketplace.com/charging/media/assets/f08f04cb-035f-4c4a-aaf2-f79defbd44c0/NoiseAbili__noise_level_eindhoven.jpg",
      header: "NoiseAbility pilot",
      meta: "Free",
      description: "No description provided.",
      city: "Eindhoven",
      extra: (
        <a>
          <Icon name="pin" />
          Eindhoven
        </a>
      )
    }
  ];
  return (
    <Container style={{ margin: 20 }}>
      <div style={{ marginBottom: "1rem" }}>
        <Input
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Search..."
        />
      </div>
      <Card.Group>
        {data
          .filter(item =>
            [item.header, item.description, item.city]
              .join(" ")
              .toLowerCase()
              .includes(query.toLowerCase())
          )
          .map(item => (
            // eslint-disable-next-line react/jsx-key
            <Card {...item} />
          ))}
      </Card.Group>
    </Container>
  );
};

export default SemanticUICard