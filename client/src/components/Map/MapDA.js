import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { characterOpen, characterSelected } from '../../actions';
import Cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import coseBilkent from 'cytoscape-cose-bilkent';

Cytoscape.use(coseBilkent);

export default function MapDA() {
  const dispatch = useDispatch();

  const [element, setElement] = useState();
  const [shape, setShape] = useState('grid');

  const data = [
    { data: { id: '1', label: '나문희' } },
    { data: { id: '2', label: '이순재' } },
    { data: { id: '3', label: '박해미' } },
    { data: { id: '4', label: '이준하' } },
    { data: { id: '5', label: '이민호' } },
    { data: { id: '6', label: '이윤호' } },
    { data: { id: '7', label: '이민용' } },
    { data: { id: '8', label: '신지' } },
    { data: { id: '9', label: '서민정' } },
    { data: { id: '10', label: '강유미' } },
    { data: { id: '11', label: '김범' } },
    { data: { id: '12', label: '홍순창' } },
    { data: { id: '13', label: '개성댁' } },
    { data: { id: '14', label: '황찬성' } },
  ];

  useEffect(() => {
    fetch('http://localhost:3000/data/character_map_da.json')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        response.data.forEach((x) => {
          data.push({
            data: {
              id: String(x.target) + '0' + String(x.source),
              target: String(x.target),
              source: String(x.source),
              type: String(x.connection_weight),
            },
          });
        });
        setElement(data);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShape('circle');
    }, 1000);
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/character_map_da.json')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        response.data.forEach((x) => {
          data.push({
            data: {
              id: String(x.target) + '0' + String(x.source),
              target: String(x.target),
              source: String(x.source),
              type: String(x.connection_weight),
            },
          });
        });
        setElement(data);
      });
  }, []);

  const style = [
    {
      selector: 'node',
      style: {
        'background-color': '#000',
        label: 'data(label)',
        width: 50,
        height: 50,
        'font-size': 10,
      },
    },
    {
      selector: 'edge',
      style: {
        width: '1.5px',
        'curve-style': 'bezier',
        'line-color': '#ced6e0',
        'target-arrow-color': '#ced6e0',
        'target-arrow-shape': 'vee',
        'source-arrow-color': '#ced6e0',
        'source-arrow-shape': 'vee',
        'arrow-scale': 1,
      },
    },
    {
      selector: 'node:selected',
      style: {
        'border-width': '6px',
        'border-color': '#AAD8FF',
        'border-opacity': '0.5',
        'background-color': '#77828C',
        width: 50,
        height: 50,
      },
    },
    {
      selector: 'edge:selected',
      style: {
        label: 'data(type)',
        'line-color': 'blue',
        'text-outline-color': '#fffa65',
        'text-outline-width': 8,
      },
    },
  ];

  for (let i = 1; i < 15; i++) {
    style.push({
      selector: `#${i}`,
      style: {
        'background-image': `images/${i}.jpg`,
        'background-fit': 'cover',
      },
    });
  }

  const layout = {
    name: shape,
    animate: true,
    gravityRangeCompound: 1.5,
    fit: true,
    tile: true,
  };

  return (
    <>
      <CytoscapeComponent
        elements={element}
        style={{ width: '100%', height: '100%' }}
        stylesheet={style}
        layout={layout}
        zoomingEnabled={true}
        boxSelectionEnabled={true}
        maxZoom={5}
        minZoom={1}
        cy={(cy) => {
          console.log('EVT', cy);

          cy.on('tap', 'node', (evt) => {
            var node = evt.target;
            console.log('EVT', evt);
            console.log('TARGET', node.data());
            console.log('TARGET TYPE', typeof node[0]);

            dispatch(characterOpen());
            dispatch(characterSelected(node.data().label));
          });
        }}
      />
    </>
  );
}
