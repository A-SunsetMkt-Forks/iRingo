/*
README: https://github.com/VirgilClyne/iRingo
*/

import ENVs from "./ENV/ENV.mjs";
import URIs from "./URI/URI.mjs";
import XMLs from "./XML/XML.mjs";

import Database from "./database/index.mjs";
import setENV from "./function/setENV.mjs";

const $ = new ENVs(" iRingo: 📍 Location v3.0.5(4) request");
const URI = new URIs();
const XML = new XMLs();

// 构造回复数据
let $response = undefined;

/***************** Processing *****************/
// 解构URL
const URL = URI.parse($request.url);
$.log(`⚠ ${$.name}`, `URL: ${JSON.stringify(URL)}`, "");
// 获取连接参数
const METHOD = $request.method, HOST = URL.host, PATH = URL.path, PATHs = URL.paths;
$.log(`⚠ ${$.name}`, `METHOD: ${METHOD}`, "");
// 解析格式
const FORMAT = ($request.headers?.["Content-Type"] ?? $request.headers?.["content-type"])?.split(";")?.[0];
$.log(`⚠ ${$.name}`, `FORMAT: ${FORMAT}`, "");
(async () => {
	const { Settings, Caches, Configs } = setENV($, "iRingo", "Location", Database);
	$.log(`⚠ ${$.name}`, `Settings.Switch: ${Settings?.Switch}`, "");
	switch (Settings.Switch) {
		case true:
		default:
			// 创建空数据
			let body = {};
			// 方法判断
			switch (METHOD) {
				case "POST":
				case "PUT":
				case "PATCH":
				case "DELETE":
					// 格式判断
					switch (FORMAT) {
						case undefined: // 视为无body
							break;
						case "application/x-www-form-urlencoded":
						case "text/plain":
						case "text/html":
						default:
							break;
						case "application/x-mpegURL":
						case "application/x-mpegurl":
						case "application/vnd.apple.mpegurl":
						case "audio/mpegurl":
							break;
						case "text/xml":
						case "text/plist":
						case "application/xml":
						case "application/plist":
						case "application/x-plist":
							break;
						case "text/vtt":
						case "application/vtt":
							break;
						case "text/json":
						case "application/json":
							break;
						case "application/protobuf":
						case "application/x-protobuf":
						case "application/vnd.google.protobuf":
						case "application/grpc":
						case "application/grpc+proto":
						case "applecation/octet-stream":
							break;
					};
					//break; // 不中断，继续处理URL
				case "GET":
				case "HEAD":
				case "OPTIONS":
				case undefined: // QX牛逼，script-echo-response不返回method
				default:
					// 主机判断
					switch (HOST) {
						case "configuration.ls.apple.com":
							// 路径判断
							switch (PATH) {
								case "config/defaults":
									$.lodash.set(Caches, "Defaults.ETag", setETag($request?.headers?.["If-None-Match"] ?? $request?.headers?.["if-none-match"], Caches?.Defaults?.ETag));
									$.setjson(Caches, "@iRingo.Location.Caches");
									break;
							};
							break;
						case "gspe1-ssl.ls.apple.com":
							switch (PATH) {
								case "pep/gcc":
									/* // 不使用 echo response
									$response = {
										status: 200,
										headers: {
											"Content-Type": "text/html",
											Date: new Date().toUTCString(),
											Connection: "keep-alive",
											"Content-Encoding": "identity",
										},
										body: Settings.PEP.GCC,
									};
									$.log(JSON.stringify($response));
									*/
									break;
							};
							break;
						case "gsp-ssl.ls.apple.com":
						case "dispatcher.is.autonavi.com":
						case "direction2.is.autonavi.com":
							switch (PATH) {
								case "dispatcher.arpc":
								case "dispatcher":
									switch (Settings?.Services?.PlaceData) {
										case "AUTO":
										default:
											break;
										case "CN":
											URL.host = "dispatcher.is.autonavi.com";
											URL.path = "dispatcher";
											break;
										case "XX":
											URL.host = "gsp-ssl.ls.apple.com";
											URL.path = "dispatcher.arpc";
											break;
									};
									break;
								case "directions.arpc":
								case "direction":
									switch (Settings?.Services?.Directions) {
										case "AUTO":
										default:
											break;
										case "CN":
											URL.host = "direction2.is.autonavi.com";
											URL.path = "direction";
											break;
										case "XX":
											URL.host = "gsp-ssl.ls.apple.com";
											URL.path = "directions.arpc";
											break;
									};
									break;
							};
							break;
						case "sundew.ls.apple.com":
						case "rap.is.autonavi.com":
							switch (PATH) {
								case "v1/feedback/submission.arpc":
								case "rap":
									switch (Settings?.Services?.RAP) {
										case "AUTO":
										default:
											break;
										case "CN":
											URL.host = "rap.is.autonavi.com";
											URL.path = "rap";
											break;
										case "XX":
											URL.host = "sundew.ls.apple.com";
											URL.path = "v1/feedback/submission.arpc";
											break;
									};
									break;
								case "grp/st":
								case "rapstatus":
									switch (Settings?.Services?.RAP) {
										case "AUTO":
										default:
											break;
										case "CN":
											URL.host = "rap.is.autonavi.com";
											URL.path = "rapstatus";
											break;
										case "XX":
											URL.host = "sundew.ls.apple.com";
											URL.path = "grp/st";
											break;
									};
									break;
							};
							break;
						case "gspe12-ssl.ls.apple.com":
						case "gspe12-cn-ssl.ls.apple.com":
							switch (PATH) {
								case "traffic":
									switch (Settings?.Services?.Traffic) {
										case "AUTO":
										default:
											break;
										case "CN":
											URL.host = "gspe12-cn-ssl.ls.apple.com";
											break;
										case "XX":
											URL.host = "gspe12-ssl.ls.apple.com";
											break;
									};
									break;
							};
							break;
						case "gspe19-ssl.ls.apple.com":
						case "gspe19-cn-ssl.ls.apple.com":
							switch (PATH) {
								case "tile.vf":
								case "tiles":
									switch (Settings?.Services?.Tiles) {
										case "AUTO":
										default:
											break;
										case "CN":
											URL.host = "gspe19-cn-ssl.ls.apple.com";
											URL.path = "tiles";
											break;
										case "XX":
											URL.host = "gspe19-ssl.ls.apple.com";
											URL.path = "tile.vf";
											break;
									};
									break;
							};
							break;
						case "gspe35-ssl.ls.apple.com":
						case "gspe35-ssl.ls.apple.cn":
							switch (PATH) {
								case "config/announcements":
									switch (URL.query?.os) {
										case "ios":
										case "ipados":
										case "macos":
										default:
											switch (Settings?.Config?.Announcements?.Environment?.default) {
												case "AUTO":
													switch (Caches?.pep?.gcc) {
														default:
															URL.query.environment = "prod";
															break;
														case "CN":
														case undefined:
															URL.query.environment = "prod-cn";
															break;
													};
													break;
												case "CN":
												default:
													URL.query.environment = "prod-cn";
													break;
												case "XX":
													URL.query.environment = "prod";
													break;
											};
											break;
										case "watchos":
											switch (Settings?.Config?.Announcements?.Environment?.watchOS) {
												case "AUTO":
													switch (Caches?.pep?.gcc) {
														default:
															URL.query.environment = "prod";
															break;
														case "CN":
														case undefined:
															URL.query.environment = "prod-cn";
															break;
													};
													break;
												case "XX":
												default:
													URL.query.environment = "prod";
													break;
												case "CN":
													URL.query.environment = "prod-cn";
													break;
											};
											break;
									};
									$.lodash.set(Caches, "Announcements.ETag", setETag($request.headers?.["If-None-Match"] ?? $request.headers?.["if-none-match"], Caches?.Announcements?.ETag));
									$.setjson(Caches, "@iRingo.Location.Caches");
									break;
								case "geo_manifest/dynamic/config":
									switch (URL.query?.os) {
										case "ios":
										case "ipados":
										case "macos":
										default:
											switch (Settings?.Geo_manifest?.Dynamic?.Config?.Country_code?.default) {
												case "AUTO":
													switch (Caches?.pep?.gcc) {
														default:
															URL.query.country_code = Caches?.pep?.gcc ?? "US";
															break;
														case "CN":
														case undefined:
															URL.query.country_code = "CN";
															break;
													};
													break;
												default:
													URL.query.country_code = Settings?.Geo_manifest?.Dynamic?.Config?.Country_code?.default ?? "CN";
													break;
											};
											break;
										case "watchos":
											switch (Settings?.Geo_manifest?.Dynamic?.Config?.Country_code?.watchOS) {
												case "AUTO":
													switch (Caches?.pep?.gcc) {
														default:
															URL.query.country_code = Caches?.pep?.gcc ?? "US";
															break;
														case "CN":
														case undefined:
															URL.query.country_code = "CN";
															break;
													};
													break;
												default:
													URL.query.country_code = Settings?.Geo_manifest?.Dynamic?.Config?.Country_code?.watchOS ?? "US";
													break;
											};
											break;
									};
									$.lodash.set(Caches, "Dynamic.ETag", setETag($request?.headers?.["If-None-Match"] ?? $request?.headers?.["if-none-match"], Caches?.Dynamic?.ETag));
									$.setjson(Caches, "@iRingo.Location.Caches");
									break;
							};
							break;
					};
					break;
				case "CONNECT":
				case "TRACE":
					break;
			};
			if ($request.headers?.Host) $request.headers.Host = URL.host;
			$request.url = URI.stringify(URL);
			break;
		case false:
			break;
	};
})()
	.catch((e) => $.logErr(e))
	.finally(() => {
		switch ($response) {
			default: { // 有构造回复数据，返回构造的回复数据
				const FORMAT = ($response?.headers?.["Content-Type"] ?? $response?.headers?.["content-type"])?.split(";")?.[0];
				$.log(`🎉 ${$.name}, finally`, `echo $response`, `FORMAT: ${FORMAT}`, "");
				if ($response?.headers?.["Content-Encoding"]) $response.headers["Content-Encoding"] = "identity";
				if ($response?.headers?.["content-encoding"]) $response.headers["content-encoding"] = "identity";
				if ($.isQuanX()) {
					$response.status = "HTTP/1.1 200 OK";
					delete $response?.headers?.["Content-Length"];
					delete $response?.headers?.["content-length"];
					delete $response?.headers?.["Transfer-Encoding"];
					switch (FORMAT) {
						case undefined: // 视为无body
							// 返回普通数据
							$.done({ status: $response.status, headers: $response.headers });
							break;
						default:
							// 返回普通数据
							$.done({ status: $response.status, headers: $response.headers, body: $response.body });
							break;
						case "application/protobuf":
						case "application/x-protobuf":
						case "application/vnd.google.protobuf":
						case "application/grpc":
						case "application/grpc+proto":
						case "applecation/octet-stream":
							// 返回二进制数据
							//$.log(`${$response.bodyBytes.byteLength}---${$response.bodyBytes.buffer.byteLength}`);
							$.done({ status: $response.status, headers: $response.headers, bodyBytes: $response.bodyBytes });
							break;
					};
				} else $.done({ response: $response });
				break;
			};
			case undefined: { // 无构造回复数据，发送修改的请求数据
				$.log(`🎉 ${$.name}, finally`, `$request`, `FORMAT: ${FORMAT}`, "");
				//$.log(`🚧 ${$.name}, finally`, `$request: ${JSON.stringify($request)}`, "");
				if ($.isQuanX()) {
					switch (FORMAT) {
						case undefined: // 视为无body
							// 返回普通数据
							$.done({ url: $request.url, headers: $request.headers })
							break;
						default:
							// 返回普通数据
							$.done({ url: $request.url, headers: $request.headers, body: $request.body })
							break;
						case "application/protobuf":
						case "application/x-protobuf":
						case "application/vnd.google.protobuf":
						case "application/grpc":
						case "application/grpc+proto":
						case "applecation/octet-stream":
							// 返回二进制数据
							//$.log(`${$request.bodyBytes.byteLength}---${$request.bodyBytes.buffer.byteLength}`);
							$.done({ url: $request.url, headers: $request.headers, bodyBytes: $request.bodyBytes.buffer.slice($request.bodyBytes.byteOffset, $request.bodyBytes.byteLength + $request.bodyBytes.byteOffset) });
							break;
					};
				} else $.done($request);
				break;
			};
		};
	})

/***************** Function *****************/
/**
 * Set ETag
 * @author VirgilClyne
 * @param {String} IfNoneMatch - If-None-Match
 * @return {String} ETag - ETag
 */
function setETag(IfNoneMatch, ETag) {
	$.log(`☑️ ${$.name}, Set ETag`, `If-None-Match: ${IfNoneMatch}`, `ETag: ${ETag}`, "");
	if (IfNoneMatch !== ETag) {
		ETag = IfNoneMatch;
		delete $request?.headers?.["If-None-Match"];
		delete $request?.headers?.["if-none-match"];
	}
	$.log(`✅ ${$.name}, Set ETag`, "");
	return ETag;
};
