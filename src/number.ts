import * as N from 'fp-ts/number'
import { identity } from 'fp-ts/function'

import * as C from './complex'
import * as Inf from './infix'
import * as Iso from './Iso'
import * as LM from './LinearMap'
import * as M from './MatrixC'
import * as Poly from './Polynomial'
import * as TC from './typeclasses'
import * as V from './VectorC'

// #################
// ### Instances ###
// #################

/**
 * @since 1.0.0
 * @category Instances
 */
export const Eq = N.Eq

/**
 * @since 1.0.0
 * @category Instances
 */
export const Ord = N.Ord

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bounded = N.Bounded

/**
 * @since 1.0.0
 * @category Instances
 */
export const MagmaSub = N.MagmaSub

/**
 * @since 1.0.0
 * @category Instances
 */
export const SemigroupSum = N.SemigroupSum

/**
 * @since 1.0.0
 * @category Instances
 */
export const SemigroupProduct = N.SemigroupProduct

/**
 * @since 1.0.0
 * @category Instances
 */
export const MonoidSum = N.MonoidSum

/**
 * @since 1.0.0
 * @category Instances
 */
export const MonoidProduct = N.MonoidProduct

/**
 * @since 1.0.0
 * @category Instances
 */
export const Field = N.Field

/**
 * @since 1.0.0
 * @category Instances
 */
export const Show = N.Show

/**
 * @since 1.0.0
 * @category Instances
 */
export const Exp: TC.Exp<number> = {
  exp: (a, n) => Math.pow(a, n),
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const Conjugate: TC.Conjugate<number> = {
  conj: identity,
}

// #############
// ### Infix ###
// #############

/**
 * @since 1.0.0
 * @category Infix
 */
export const _ = Inf.getFieldPolishInfix(Field)

/**
 * @since 1.0.0
 * @category Infix
 */
export const _ord = Inf.getOrdPolishInfix(Ord)

// ##############
// ### Vec1d ####
// ##############

/**
 * @since 1.0.0
 * @category Model
 */
export type Vec1d = V.VecC<1, number>

/**
 * @since 1.0.0
 * @category Instances
 */
export const AbelianGroup1d: TC.AbelianGroup<Vec1d> = V.getAbGroup(Field)(1)

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bimodule1d: TC.Bimodule<Vec1d, number> = V.getBimodule(Field)(1)

/**
 * @since 1.0.0
 * @category Instances
 */
export const VectorField1d: TC.VectorSpace<number, Vec1d> = V.getVectorSpace(Field)(1)

/**
 * @since 1.0.0
 * @category Instances
 */
export const InnerProductSpace1d: TC.InnerProductSpace<number, Vec1d> =
  V.getInnerProductSpace(Field, Conjugate)(1)

// ##############
// ### Vec2d ####
// ##############

/**
 * @since 1.0.0
 * @category Model
 */
export type Vec2d = V.VecC<2, number>

/**
 * @since 1.0.0
 * @category Instances
 */
export const AbelianGroup2d: TC.AbelianGroup<Vec2d> = V.getAbGroup(Field)(2)

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bimodule2d: TC.Bimodule<Vec2d, number> = V.getBimodule(Field)(2)

/**
 * @since 1.0.0
 * @category Instances
 */
export const VectorField2d: TC.VectorSpace<number, Vec2d> = V.getVectorSpace(Field)(2)

/**
 * @since 1.0.0
 * @category Instances
 */
export const InnerProductSpace2d: TC.InnerProductSpace<number, Vec2d> =
  V.getInnerProductSpace(Field, Conjugate)(2)

/**
 * @since 1.0.0
 * @category Instances
 */
export const getLinearMap2d: (M: Mat22) => LM.LinearMap2<V.URI, 2, number, number> =
  M.getLinearMap(InnerProductSpace2d)

/**
 * @since 1.0.0
 * @category Instances
 */
export const getRotationMap2d: (
  theta: number
) => LM.LinearMap2<V.URI, 2, number, number> = theta =>
  getLinearMap2d(
    M.fromNestedTuples([
      [Math.cos(theta), -Math.sin(theta)],
      [Math.sin(theta), Math.cos(theta)],
    ])
  )

// ###############
// ### Mat 2x2 ###
// ###############

/**
 * @since 1.0.0
 * @category Model
 */
export type Mat22 = M.MatC<2, 2, number>

/**
 * @since 1.0.0
 * @category Instances
 */
export const AdditiveAbelianGroup22: TC.AbelianGroup<Mat22> = M.getAdditiveAbelianGroup(
  Field
)(2, 2)

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bimodule22: TC.Bimodule<Mat22, number> = M.getBimodule(Field)(2, 2)

/**
 * @since 1.0.0
 * @category Constructors
 */
export const matFromComplex: (c: C.Complex) => Mat22 = ({ Re, Im }) =>
  M.fromNestedTuples([
    [Re, -Im],
    [Im, Re],
  ])

// ##############
// ### Vec3d ####
// ##############

/**
 * @since 1.0.0
 * @category Model
 */
export type Vec3d = V.VecC<3, number>

/**
 * @since 1.0.0
 * @category Instances
 */
export const AbelianGroup3d: TC.AbelianGroup<Vec3d> = V.getAbGroup(Field)(3)

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bimodule3d: TC.Bimodule<Vec3d, number> = V.getBimodule(Field)(3)

/**
 * @since 1.0.0
 * @category Instances
 */
export const VectorField3d: TC.VectorSpace<number, Vec3d> = V.getVectorSpace(Field)(3)

/**
 * @since 1.0.0
 * @category Instances
 */
export const InnerProductSpace3d: TC.InnerProductSpace<number, Vec3d> =
  V.getInnerProductSpace(Field, Conjugate)(3)

/**
 * @since 1.0.0
 * @category Instances
 */
export const getLinearMap3d: (M: Mat33) => LM.LinearMap2<V.URI, 3, number, number> =
  M.getLinearMap(InnerProductSpace3d)

/**
 * @since 1.0.0
 * @category Instances
 */
export const getXRotationMap3d: (
  theta: number
) => LM.LinearMap2<V.URI, 3, number, number> = theta =>
  getLinearMap3d(
    M.fromNestedTuples([
      [1, 0, 0],
      [0, Math.cos(theta), -Math.sin(theta)],
      [0, Math.sin(theta), Math.cos(theta)],
    ])
  )

/**
 * @since 1.0.0
 * @category Instances
 */
export const getYRotationMap3d: (
  theta: number
) => LM.LinearMap2<V.URI, 3, number, number> = theta =>
  getLinearMap3d(
    M.fromNestedTuples([
      [Math.cos(theta), 0, Math.sin(theta)],
      [0, 1, 0],
      [-Math.sin(theta), 0, Math.cos(theta)],
    ])
  )

/**
 * @since 1.0.0
 * @category Instances
 */
export const getZRotationMap3d: (
  theta: number
) => LM.LinearMap2<V.URI, 3, number, number> = theta =>
  getLinearMap3d(
    M.fromNestedTuples([
      [Math.cos(theta), -Math.sin(theta), 0],
      [Math.sin(theta), Math.cos(theta), 0],
      [0, 0, 1],
    ])
  )

/**
 * @since 1.0.0
 * @category Vector Operations
 */
export const cross = V.crossProduct(Field)

// ###############
// ### Mat 3x3 ###
// ###############

/**
 * @since 1.0.0
 * @category Model
 */
export type Mat33 = M.MatC<3, 3, number>

/**
 * @since 1.0.0
 * @category Instances
 */
export const AdditiveAbelianGroup33: TC.AbelianGroup<Mat33> = M.getAdditiveAbelianGroup(
  Field
)(3, 3)

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bimodule33: TC.Bimodule<Mat33, number> = M.getBimodule(Field)(3, 3)

// ##############
// ### Vec4d ####
// ##############

/**
 * @since 1.0.0
 * @category Model
 */
export type Vec4d = V.VecC<4, number>

/**
 * @since 1.0.0
 * @category Instances
 */
export const AbelianGroup4d: TC.AbelianGroup<Vec4d> = V.getAbGroup(Field)(4)

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bimodule4d: TC.Bimodule<Vec4d, number> = V.getBimodule(Field)(4)

/**
 * @since 1.0.0
 * @category Instances
 */
export const VectorField4d: TC.VectorSpace<number, Vec4d> = V.getVectorSpace(Field)(4)

/**
 * @since 1.0.0
 * @category Instances
 */
export const InnerProductSpace4d: TC.InnerProductSpace<number, Vec4d> =
  V.getInnerProductSpace(Field, Conjugate)(4)

/**
 * @since 1.0.0
 * @category Instances
 */
export const getLinearMap4dd: (M: Mat44) => LM.LinearMap2<V.URI, 4, number, number> =
  M.getLinearMap(InnerProductSpace4d)

// ###############
// ### Mat 4x4 ###
// ###############

/**
 * @since 1.0.0
 * @category Model
 */
export type Mat44 = M.MatC<4, 4, number>

/**
 * @since 1.0.0
 * @category Instances
 */
export const AdditiveAbelianGroup44: TC.AbelianGroup<Mat44> = M.getAdditiveAbelianGroup(
  Field
)(4, 4)

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bimodule44: TC.Bimodule<Mat44, number> = M.getBimodule(Field)(4, 4)

// ##############
// ### Vec5d ####
// ##############

/**
 * @since 1.0.0
 * @category Model
 */
export type Vec5d = V.VecC<5, number>

/**
 * @since 1.0.0
 * @category Instances
 */
export const AbelianGroup5d: TC.AbelianGroup<Vec5d> = V.getAbGroup(Field)(5)

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bimodule5d: TC.Bimodule<Vec5d, number> = V.getBimodule(Field)(5)

/**
 * @since 1.0.0
 * @category Instances
 */
export const VectorField5d: TC.VectorSpace<number, Vec5d> = V.getVectorSpace(Field)(5)

/**
 * @since 1.0.0
 * @category Instances
 */
export const InnerProductSpace5d: TC.InnerProductSpace<number, Vec5d> =
  V.getInnerProductSpace(Field, Conjugate)(5)

/**
 * @since 1.0.0
 * @category Instances
 */
export const getLinearMap5d: (M: Mat55) => LM.LinearMap2<V.URI, 5, number, number> =
  M.getLinearMap(InnerProductSpace5d)

// ###############
// ### Mat 5x5 ###
// ###############

/**
 * @since 1.0.0
 * @category Model
 */
export type Mat55 = M.MatC<5, 5, number>

/**
 * @since 1.0.0
 * @category Instances
 */
export const AdditiveAbelianGroup55: TC.AbelianGroup<Mat55> = M.getAdditiveAbelianGroup(
  Field
)(5, 5)

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bimodule55: TC.Bimodule<Mat55, number> = M.getBimodule(Field)(5, 5)

// ##############
// ### Vec6d ####
// ##############

/**
 * @since 1.0.0
 * @category Model
 */
export type Vec6d = V.VecC<6, number>

/**
 * @since 1.0.0
 * @category Instances
 */
export const AbelianGroup6d: TC.AbelianGroup<Vec6d> = V.getAbGroup(Field)(6)

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bimodule6d: TC.Bimodule<Vec6d, number> = V.getBimodule(Field)(6)

/**
 * @since 1.0.0
 * @category Instances
 */
export const VectorField6d: TC.VectorSpace<number, Vec6d> = V.getVectorSpace(Field)(6)

/**
 * @since 1.0.0
 * @category Instances
 */
export const InnerProductSpace6d: TC.InnerProductSpace<number, Vec6d> =
  V.getInnerProductSpace(Field, Conjugate)(6)

/**
 * @since 1.0.0
 * @category Instances
 */
export const getLinearMap6d: (M: Mat66) => LM.LinearMap2<V.URI, 6, number, number> =
  M.getLinearMap(InnerProductSpace6d)

// ###############
// ### Mat 6x6 ###
// ###############

/**
 * @since 1.0.0
 * @category Model
 */
export type Mat66 = M.MatC<6, 6, number>

/**
 * @since 1.0.0
 * @category Instances
 */
export const AdditiveAbelianGroup66: TC.AbelianGroup<Mat66> = M.getAdditiveAbelianGroup(
  Field
)(6, 6)

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bimodule66: TC.Bimodule<Mat66, number> = M.getBimodule(Field)(6, 6)

// #############################
// ### Polynomial Operations ###
// #############################

/**
 * @since 1.0.0
 * @category Polynomial Operations
 */
export const differentiate = Poly.getDifferentiateNumber()

/**
 * @since 1.0.0
 * @category Polynomial Operations
 */
export const indefiniteIntegral = Poly.getIndefiniteIntegralNumber()

// ############################
// ### Polynomial Instances ###
// ############################

/**
 * @since 1.0.0
 * @category Instances
 */
export const PolynomialAdditiveAbelianGroup = Poly.getAdditiveAbelianGroup(Field)

/**
 * @since 1.0.0
 * @category Instances
 */
export const PolynomialBimodule = Poly.getBimodule(Field)

/**
 * @since 1.0.0
 * @category Instances
 */
export const PolynomialRing = Poly.getRing(Field)

/**
 * @since 1.0.0
 * @category Instances
 */
export const PolynomialVectorSpace = Poly.getVectorSpace(Field)

/**
 * @since 1.0.0
 * @category Instances
 */
export const DifferentialLinearMap: LM.LinearMap2<Poly.URI, number, number, number> = {
  isoV: Iso.getId(),
  mapL: differentiate,
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const getDefiniteIntegralLinearMap: (
  constantTerm: number
) => LM.LinearMap2<Poly.URI, number, number, number> = constantTerm => ({
  isoV: Iso.getId(),
  mapL: indefiniteIntegral(constantTerm),
})

// ##############################
// ### Polynomial Destructors ###
// ##############################

/**
 * @since 1.0.0
 * @category Destructors
 */
export const evaluatePolynomial = Poly.evaluate(Field, Exp)

/**
 * @since 1.0.0
 * @category Destructors
 */
export const polynomialToExpression = Poly.toExpression<`${number}x^${number}`, number>(
  Field,
  Exp,
  ([coefficient, power]) => `${coefficient}x^${power}`
)
