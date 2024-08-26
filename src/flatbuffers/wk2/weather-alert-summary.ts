// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { Certainty } from '../wk2/certainty.js';
import { ID } from '../wk2/id.js';
import { ImportanceType } from '../wk2/importance-type.js';
import { ResponseType } from '../wk2/response-type.js';
import { Severity } from '../wk2/severity.js';
import { SignificanceType } from '../wk2/significance-type.js';
import { Urgency } from '../wk2/urgency.js';


export class WeatherAlertSummary {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):WeatherAlertSummary {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsWeatherAlertSummary(bb:flatbuffers.ByteBuffer, obj?:WeatherAlertSummary):WeatherAlertSummary {
  return (obj || new WeatherAlertSummary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsWeatherAlertSummary(bb:flatbuffers.ByteBuffer, obj?:WeatherAlertSummary):WeatherAlertSummary {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new WeatherAlertSummary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id(obj?:ID):ID|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new ID()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

areaId():string|null
areaId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
areaId(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

unknown3():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : 0;
}

attributionUrl():string|null
attributionUrl(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
attributionUrl(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

countryCode():string|null
countryCode(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
countryCode(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

description():string|null
description(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
description(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

token():string|null
token(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
token(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

effectiveTime():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

expireTime():number {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

issuedTime():number {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

eventOnsetTime():number {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

eventEndTime():number {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

detailsUrl():string|null
detailsUrl(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
detailsUrl(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

phenomenon():string|null
phenomenon(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
phenomenon(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

severity():Severity {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : Severity.UNKNOWN;
}

significance():SignificanceType {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : SignificanceType.UNKNOWN;
}

source():string|null
source(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
source(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

eventSource():string|null
eventSource(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
eventSource(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

urgency():Urgency {
  const offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : Urgency.UNKNOWN;
}

certainty():Certainty {
  const offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : Certainty.UNKNOWN;
}

importance():ImportanceType {
  const offset = this.bb!.__offset(this.bb_pos, 44);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : ImportanceType.NORMAL;
}

responses(index: number):ResponseType|null {
  const offset = this.bb!.__offset(this.bb_pos, 46);
  return offset ? this.bb!.readInt8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

responsesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 46);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

responsesArray():Int8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 46);
  return offset ? new Int8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

unknown23():number {
  const offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : 0;
}

unknown24():number {
  const offset = this.bb!.__offset(this.bb_pos, 50);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : 0;
}

static startWeatherAlertSummary(builder:flatbuffers.Builder) {
  builder.startObject(24);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static addAreaId(builder:flatbuffers.Builder, areaIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, areaIdOffset, 0);
}

static addUnknown3(builder:flatbuffers.Builder, unknown3:number) {
  builder.addFieldInt8(2, unknown3, 0);
}

static addAttributionUrl(builder:flatbuffers.Builder, attributionUrlOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, attributionUrlOffset, 0);
}

static addCountryCode(builder:flatbuffers.Builder, countryCodeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, countryCodeOffset, 0);
}

static addDescription(builder:flatbuffers.Builder, descriptionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, descriptionOffset, 0);
}

static addToken(builder:flatbuffers.Builder, tokenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, tokenOffset, 0);
}

static addEffectiveTime(builder:flatbuffers.Builder, effectiveTime:number) {
  builder.addFieldInt32(7, effectiveTime, 0);
}

static addExpireTime(builder:flatbuffers.Builder, expireTime:number) {
  builder.addFieldInt32(8, expireTime, 0);
}

static addIssuedTime(builder:flatbuffers.Builder, issuedTime:number) {
  builder.addFieldInt32(9, issuedTime, 0);
}

static addEventOnsetTime(builder:flatbuffers.Builder, eventOnsetTime:number) {
  builder.addFieldInt32(10, eventOnsetTime, 0);
}

static addEventEndTime(builder:flatbuffers.Builder, eventEndTime:number) {
  builder.addFieldInt32(11, eventEndTime, 0);
}

static addDetailsUrl(builder:flatbuffers.Builder, detailsUrlOffset:flatbuffers.Offset) {
  builder.addFieldOffset(12, detailsUrlOffset, 0);
}

static addPhenomenon(builder:flatbuffers.Builder, phenomenonOffset:flatbuffers.Offset) {
  builder.addFieldOffset(13, phenomenonOffset, 0);
}

static addSeverity(builder:flatbuffers.Builder, severity:Severity) {
  builder.addFieldInt8(14, severity, Severity.UNKNOWN);
}

static addSignificance(builder:flatbuffers.Builder, significance:SignificanceType) {
  builder.addFieldInt8(15, significance, SignificanceType.UNKNOWN);
}

static addSource(builder:flatbuffers.Builder, sourceOffset:flatbuffers.Offset) {
  builder.addFieldOffset(16, sourceOffset, 0);
}

static addEventSource(builder:flatbuffers.Builder, eventSourceOffset:flatbuffers.Offset) {
  builder.addFieldOffset(17, eventSourceOffset, 0);
}

static addUrgency(builder:flatbuffers.Builder, urgency:Urgency) {
  builder.addFieldInt8(18, urgency, Urgency.UNKNOWN);
}

static addCertainty(builder:flatbuffers.Builder, certainty:Certainty) {
  builder.addFieldInt8(19, certainty, Certainty.UNKNOWN);
}

static addImportance(builder:flatbuffers.Builder, importance:ImportanceType) {
  builder.addFieldInt8(20, importance, ImportanceType.NORMAL);
}

static addResponses(builder:flatbuffers.Builder, responsesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(21, responsesOffset, 0);
}

static createResponsesVector(builder:flatbuffers.Builder, data:ResponseType[]):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startResponsesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addUnknown23(builder:flatbuffers.Builder, unknown23:number) {
  builder.addFieldInt8(22, unknown23, 0);
}

static addUnknown24(builder:flatbuffers.Builder, unknown24:number) {
  builder.addFieldInt8(23, unknown24, 0);
}

static endWeatherAlertSummary(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createWeatherAlertSummary(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset, areaIdOffset:flatbuffers.Offset, unknown3:number, attributionUrlOffset:flatbuffers.Offset, countryCodeOffset:flatbuffers.Offset, descriptionOffset:flatbuffers.Offset, tokenOffset:flatbuffers.Offset, effectiveTime:number, expireTime:number, issuedTime:number, eventOnsetTime:number, eventEndTime:number, detailsUrlOffset:flatbuffers.Offset, phenomenonOffset:flatbuffers.Offset, severity:Severity, significance:SignificanceType, sourceOffset:flatbuffers.Offset, eventSourceOffset:flatbuffers.Offset, urgency:Urgency, certainty:Certainty, importance:ImportanceType, responsesOffset:flatbuffers.Offset, unknown23:number, unknown24:number):flatbuffers.Offset {
  WeatherAlertSummary.startWeatherAlertSummary(builder);
  WeatherAlertSummary.addId(builder, idOffset);
  WeatherAlertSummary.addAreaId(builder, areaIdOffset);
  WeatherAlertSummary.addUnknown3(builder, unknown3);
  WeatherAlertSummary.addAttributionUrl(builder, attributionUrlOffset);
  WeatherAlertSummary.addCountryCode(builder, countryCodeOffset);
  WeatherAlertSummary.addDescription(builder, descriptionOffset);
  WeatherAlertSummary.addToken(builder, tokenOffset);
  WeatherAlertSummary.addEffectiveTime(builder, effectiveTime);
  WeatherAlertSummary.addExpireTime(builder, expireTime);
  WeatherAlertSummary.addIssuedTime(builder, issuedTime);
  WeatherAlertSummary.addEventOnsetTime(builder, eventOnsetTime);
  WeatherAlertSummary.addEventEndTime(builder, eventEndTime);
  WeatherAlertSummary.addDetailsUrl(builder, detailsUrlOffset);
  WeatherAlertSummary.addPhenomenon(builder, phenomenonOffset);
  WeatherAlertSummary.addSeverity(builder, severity);
  WeatherAlertSummary.addSignificance(builder, significance);
  WeatherAlertSummary.addSource(builder, sourceOffset);
  WeatherAlertSummary.addEventSource(builder, eventSourceOffset);
  WeatherAlertSummary.addUrgency(builder, urgency);
  WeatherAlertSummary.addCertainty(builder, certainty);
  WeatherAlertSummary.addImportance(builder, importance);
  WeatherAlertSummary.addResponses(builder, responsesOffset);
  WeatherAlertSummary.addUnknown23(builder, unknown23);
  WeatherAlertSummary.addUnknown24(builder, unknown24);
  return WeatherAlertSummary.endWeatherAlertSummary(builder);
}
}