export interface ProductModel {
  id: string;

  /**
   * @description 상품 제목
   */
  title: string;

  /**
   * @description 상품 사진
   */
  coverImage: string;

  /**
   * @description 상품 가격
   */
  price: number;

  /**
   * @description 쿠폰 사용 가능상품
   * @example true = 사용 가능
   * @example false = 사용 불가능, 쿠폰할인 계산에서 제외
   */
  availableCoupon?: boolean;

  score: number;
}
