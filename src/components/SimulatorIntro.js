import React from 'react';
import { Link } from 'react-router-dom';
import './SimulatorIntro.css';

const SimulatorIntro = ({ simulator, simulatorPath }) => {
  const getDetailedDescription = (id) => {
    // Different detailed descriptions based on simulator type
    if (id === 'equimolar-diffusion') {
      return (
        <>
          <p>
            Equimolar Counter Diffusion is a mass transfer process where two species diffuse
            in opposite directions with equal molar flux, following Fick's Law.
          </p>
          <p>
            In this simulation, you can observe the concentration profiles as two species
            diffuse through different geometries (planar, cylindrical, or spherical).
          </p>
          <p>
            <strong>Key Parameters:</strong>
          </p>
          <ul>
            <li><strong>Diffusivity (D<sub>AB</sub>):</strong> The diffusion coefficient between species A and B</li>
            <li><strong>Concentration Gradient:</strong> The driving force for diffusion</li>
            <li><strong>System Length:</strong> The characteristic dimension of the system</li>
            <li><strong>Geometry:</strong> The shape of the diffusion medium (planar, cylindrical, or spherical)</li>
          </ul>
          <p>
            <strong>Governing Equation:</strong> Fick's First Law
          </p>
          <div className="equation">
            J<sub>A</sub> = -D<sub>AB</sub> · dC<sub>A</sub>/dx
          </div>
          <p>
            The simulation visualizes how concentration profiles evolve in different geometries
            and how they are affected by changes in diffusivity and system dimensions.
          </p>
        </>
      );
    } else if (id === 'packed-bed') {
      return (
        <>
          <p>
            A Packed Bed Reactor is a tubular vessel filled with solid catalyst particles through which reactants flow and undergo chemical transformation. This simulation demonstrates the concentration profile along the reactor length as reactants are consumed through reaction.
          </p>
          <p>
            In this simulation, you can observe how the concentration changes throughout a packed bed reactor due to the combined effects of convection, diffusion, and reaction.
          </p>
          <p>
            <strong>Key Parameters:</strong>
          </p>
          <ul>
            <li><strong>Bed Length:</strong> The total length of the reactor (m)</li>
            <li><strong>Bed Diameter:</strong> The diameter of the cylindrical reactor (m)</li>
            <li><strong>Particle Diameter:</strong> Size of the catalyst particles (m)</li>
            <li><strong>Void Fraction:</strong> The porosity of the packed bed</li>
            <li><strong>Inlet Concentration:</strong> Initial concentration of reactants (mol/L)</li>
            <li><strong>Flow Rate:</strong> Volumetric flow rate through the reactor (m³/s)</li>
            <li><strong>Diffusivity:</strong> Molecular diffusion coefficient (m²/s)</li>
            <li><strong>Reaction Rate:</strong> Rate of reactant consumption (mol/(L·s))</li>
          </ul>
          <p>
            <strong>Derived Parameters:</strong>
          </p>
          <ul>
            <li><strong>Superficial Velocity:</strong> Flow rate divided by cross-sectional area</li>
            <li><strong>Peclet Number:</strong> Ratio of convective to diffusive transport</li>
            <li><strong>Damköhler Number:</strong> Ratio of reaction rate to convective transport rate</li>
          </ul>
          <p>
            <strong>Governing Equations:</strong>
          </p>
          <p>
            The concentration profile is governed by the convection-diffusion-reaction equation:
          </p>
          <div className="equation">
            u(∂C/∂x) = D(∂²C/∂x²) - r
          </div>
          <p>
            Where:
          </p>
          <ul>
            <li>u is the superficial velocity</li>
            <li>C is the concentration</li>
            <li>D is the effective diffusivity</li>
            <li>r is the reaction rate</li>
            <li>x is the position along the reactor</li>
          </ul>
          <p>
            The simulation visualizes how these parameters affect the concentration profile, helping to understand the performance and design of packed bed reactors in chemical engineering applications.
          </p>
        </>
      );
    } else if (id === 'stagnant-film') {
      return (
        <>
          <p>
            The Stagnant Film Diffusion Simulator models mass transfer across a stagnant fluid film, a fundamental concept in chemical engineering. This simulation demonstrates how species diffuse through a stationary fluid layer, which is a common scenario in many industrial processes.
          </p>
          <p>
            <strong>Key Parameters:</strong>
          </p>
          <ul>
            <li><strong>Film Thickness (δ):</strong> Distance across which diffusion occurs</li>
            <li><strong>Diffusion Coefficient (D<sub>AB</sub>):</strong> Molecular diffusivity of species A in medium B</li>
            <li><strong>Concentration Difference (ΔC):</strong> Driving force for diffusion</li>
            <li><strong>Mass Transfer Coefficient (k):</strong> Overall rate of mass transfer</li>
          </ul>
          <p>
            The simulation visualizes:
          </p>
          <ul>
            <li>Concentration profile across the film</li>
            <li>Mass transfer flux</li>
            <li>Effect of film thickness on transfer rate</li>
            <li>Impact of diffusion coefficient</li>
          </ul>
          <p>
            This simulation helps understand:
          </p>
          <ul>
            <li>Film theory of mass transfer</li>
            <li>Concentration boundary layers</li>
            <li>Mass transfer resistance</li>
            <li>Design of mass transfer equipment</li>
          </ul>
        </>
      );
    } else if (id === 'distillation-column') {
      return (
        <>
          <p>
            The Distillation Column Simulator models the separation of liquid mixtures through vapor-liquid equilibrium. This fundamental unit operation is widely used in chemical processing for purification and separation of components.
          </p>
          <p>
            <strong>Key Parameters:</strong>
          </p>
          <ul>
            <li><strong>Number of Stages:</strong> Theoretical equilibrium stages</li>
            <li><strong>Reflux Ratio:</strong> Ratio of liquid returned to column vs. product withdrawn</li>
            <li><strong>Feed Stage Location:</strong> Position where feed enters the column</li>
            <li><strong>Component Properties:</strong> Relative volatility, boiling points</li>
          </ul>
          <p>
            The simulation visualizes:
          </p>
          <ul>
            <li>Temperature and composition profiles</li>
            <li>Stage-by-stage separation</li>
            <li>Effect of operating parameters</li>
            <li>Product purity relationships</li>
          </ul>
          <p>
            This simulation helps understand:
          </p>
          <ul>
            <li>Vapor-liquid equilibrium</li>
            <li>McCabe-Thiele method</li>
            <li>Column design principles</li>
            <li>Operating parameter effects</li>
          </ul>
        </>
      );
    }
    // Add cases for other simulators here
    return <p>Information about this simulator will be added soon.</p>;
  };

  return (
    <div className="simulator-intro">
      <h1>{simulator.title}</h1>
      <div className="intro-content">
        {getDetailedDescription(simulator.id)}
        <div className="start-simulation">
          <Link to={simulatorPath} className="simulation-button">
            Open Simulator
          </Link>
        </div>
      </div>
    </div>
  );
};

export default  SimulatorIntro;