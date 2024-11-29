"use client"
import { Field } from "@/components/ui/Field/Field"
import { useAppDispatch, useAppSelector } from "@/store/hooks/redux"
import { productsSlice } from "@/store/reducer/ProductsSlice"
import Head from "next/head"
import React, { useEffect, useState } from "react"


export default function CreatePage<P extends {}>() {
    const dispatch = useAppDispatch()
    const {productsCreate} = productsSlice.actions
    const {title, description, price} = useAppSelector(state => state.productReducer.createFields)

    useEffect(() => {
        console.log(title, description, price)
    }, [title, description, price])

    return (
        <>
        <Head>
            <title>Create to Product</title>
            <meta name="description" content="create" />
        </Head>
        <div>
            <form action="">
                <Field 
                    label="Title"
                    id="descriptionByProductCreate"
                    type="text"
                    name="description"
                    value={description}
                    placeholder="name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(
                        productsCreate({
                            title: e.target.value, 
                            description, 
                            price
                        })
                    )}
                    required
                />
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                      id="descriptionByProductCreate"
                      name="description"
                      value={description}
                      placeholder="Enter project description"
                      onChange={(e) => dispatch(productsCreate({title, description: e.target.value, price}))}
                      required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                      type="number"
                      id="priceByProductCreate"
                      name="price"
                      value={price}
                      placeholder="Enter price"
                      onChange={(e) => dispatch(productsCreate({title, description, price: parseInt(e.target.value)}))}
                      required
                    />
                </div>
            </form>
        </div>
        </>
    )
}