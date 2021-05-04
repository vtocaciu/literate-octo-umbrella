import { Dimensions, PixelRatio } from "react-native";

//ip12 width: 390; height: 844

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

export const getWidth = (): number => {
  return SCREEN_WIDTH;
}

export const getHeight = (): number => {
  return SCREEN_HEIGHT;
}

export const normalizeFontSize = (size: number): number => {
  
  return Math.round(size / PixelRatio.getFontScale());
}

export const normalizeHeight = (height: number): number => {
  return PixelRatio.getPixelSizeForLayoutSize(height);
}

export const normalizeWidth = (width: number): number => {
  return PixelRatio.getPixelSizeForLayoutSize(width);
}