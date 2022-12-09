import express, {Router} from 'express'
import morgan from 'morgan'
import {errorHandler} from './errorHandler'
import {lambdaHandler, startLocal} from './handler'
import cors from "cors"

export function createDefaultApp(router: Router) {
  return express().use(cors()).use(morgan('combined')).use(router).use(errorHandler)
}

export function startLambdaServer(router: Router, local: boolean) {
  if (local) {
    startLocal(createDefaultApp(router))
  } else {
    return lambdaHandler(createDefaultApp(router))
  }
}
