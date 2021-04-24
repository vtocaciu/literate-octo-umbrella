import { Dimensions, PixelRatio } from "react-native";

//ip12 width: 390; height: 844

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');


export const normalizeFontSize = (size: number): number => {
  
  return Math.round(size / PixelRatio.getFontScale());
}

export const normalizeHeight = (height: number): number => {
  return PixelRatio.getPixelSizeForLayoutSize(height);
}

export const normalizeWidth = (width: number): number => {
  return PixelRatio.getPixelSizeForLayoutSize(width);
}