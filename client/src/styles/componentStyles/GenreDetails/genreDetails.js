/**
 * File name : genreDetails.js
 * Possible modifications:
 * There should be a single svg component
 * Maintain genre name in the array
 * Use the genre name variable to change the design
 */

import styled from "styled-components";
import { Genre } from "./genreCommonStyles";
import thegrandPhilosophers from "../../../img/AntilibraryGradients/TheGrandPhilisophers.jpg";
import guidingLights from "../../../img/AntilibraryGradients/GuidingLights.jpg";
import architectsOfTheFuture from "../../../img/AntilibraryGradients/ArchitectsOfFuture.jpg";
import mavericScientists from "../../../img/AntilibraryGradients/MaverickScientists.jpg";
import luminaries from "../../../img/AntilibraryGradients/Luminaries.jpg";
import menOfLetters from "../../../img/AntilibraryGradients/MenOfLetters.jpg";

export const TheGrandPhilisophers = styled(Genre)`
	background-image: url(${thegrandPhilosophers});
`;

export const GuidingLights = styled(Genre)`
	background-image: url(${guidingLights});
`;

export const ArchitectsOfFuture = styled(Genre)`
	background-image: url(${architectsOfTheFuture});
`;

export const MaverickScientists = styled(Genre)`
	background-image: url(${mavericScientists});
`;

export const Luminaries = styled(Genre)`
	background-image: url(${luminaries});
`;

export const MenOfLetters = styled(Genre)`
	background-image: url(${menOfLetters});
`;
