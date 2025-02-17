import { ProductModel } from "../Models/ProductModel";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../Models/UserModel";

export function add(currentState:ProductModel[], action:PayloadAction<ProductModel>):ProductModel[]{
    const newState = [...currentState]; //copy of current State
    const productToAdd = action.payload;
    newState.push(productToAdd);
    return newState
}

export function update(currentState:ProductModel[], action:PayloadAction<ProductModel>):ProductModel[]{
    const newState = [...currentState];
    const productToUpdate = action.payload;
    const index = newState.findIndex(p => p.id === productToUpdate.id);
    newState[index] = productToUpdate;
    return newState
}

export function remove(currentState:ProductModel[], action:PayloadAction<number>):ProductModel[]{
    const newState = [...currentState];
    const productIndexToDelete = action.payload;
    const index = newState.findIndex(p => p.id === productIndexToDelete);
    newState.splice(index, 1);
    return newState
}

export function init(currentState:ProductModel[], action:PayloadAction<ProductModel[]>):ProductModel[]{
    const allProducts = action.payload;
    return allProducts;
}

//---------------------------------------------------------------------------------
export function login(currentState:UserModel, action:PayloadAction<UserModel>):UserModel{
    const newState = action.payload;
    return newState;
}
export function register(currentState:UserModel, action:PayloadAction<UserModel>):UserModel{
    const newState = action.payload;
    return newState;
}
export function logout(currentState:UserModel, action:PayloadAction<UserModel>):UserModel{
    return null;
}
