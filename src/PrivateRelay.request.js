/*
README: https://github.com/VirgilClyne/iRingo
*/

import ENVs from "./ENV/ENV.mjs";
import URIs from "./URI/URI.mjs";

import Database from "./database/index.mjs";
import setENV from "./function/setENV.mjs";

const $ = new ENVs(" iRingo: ☁️ iCloud Private Relay v3.0.3(3) request");
const URI = new URIs();

// 构造回复数据
let $response = undefined;

/***************** Processing *****************/
(async () => {
	const { Settings, Caches, Configs } = await setENV($, "iRingo", "PrivateRelay", Database);
	$.log(`⚠ ${$.name}`, `Settings.Switch: ${Settings?.Switch}`, "");
	switch (Settings.Switch) {
		case true:
		default:
			// 解构URL
			let url = URL.parse($request?.url);
			$.log(`⚠ ${$.name}`, `URL: ${JSON.stringify(url)}`, "");
			// 获取连接参数
			const METHOD = $request?.method, HOST = url?.host, PATH = url?.path, PATHs = url?.paths;
			$.log(`⚠ ${$.name}`, `METHOD: ${METHOD}`, "");
			// 解析格式
			const FORMAT = ($request?.headers?.["Content-Type"] ?? $request?.headers?.["content-type"])?.split(";")?.[0];
			$.log(`⚠ ${$.name}`, `FORMAT: ${FORMAT}`, "");
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
						case "m3u8":
						case "application/x-mpegurl":
						case "application/vnd.apple.mpegurl":
							//body = M3U8.parse($response.body);
							//$.log(`🚧 ${$.name}`, "M3U8.parse($response.body)", JSON.stringify(body), "");
							//$response.body = M3U8.stringify(body);
							break;
						case "xml":
						case "srv3":
						case "text/xml":
						case "application/xml":
							//body = XML.parse($response.body);
							//$.log(body);
							//$response.body = XML.stringify(body);
							break;
						case "plist":
						case "text/plist":
						case "application/plist":
						case "application/x-plist":
							//body = await PLIST("plist2json", $request.body);
							//$.log(body);
							//$request.body = await PLIST("json2plist", body);
							break;
						case "vtt":
						case "webvtt":
						case "text/vtt":
						case "application/vtt":
							//body = VTT.parse($response.body);
							//$.log(body);
							//$response.body = VTT.stringify(body);
							break;
						case "json":
						case "json3":
						case "text/json":
						case "application/json":
							//body = JSON.parse($request.body);
							//$.log(body);
							//$request.body = JSON.stringify(body);
							break;
						case "application/x-protobuf":
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
						case "mask-api.icloud.com":
							//if ($request?.headers?.["X-Mask-User-Tier"]) $request.headers["X-Mask-User-Tier"] = "FREE"; //"SUBSCRIBER"
							//if ($request?.headers?.["x-mask-user-tier"]) $request.headers["x-mask-user-tier"] = "FREE"; //"SUBSCRIBER"
							if (Settings.CountryCode !== "AUTO") {
								if ($request?.headers?.["Client-Region"]) $request.headers["Client-Region"] = `${Settings.CountryCode}-GMT+8`;
								if ($request?.headers?.["client-region"]) $request.headers["client-region"] = `${Settings.CountryCode}-GMT+8`;
							};
							// 路径判断
							switch (PATH) {
								case "v1/fetchAuthTokens":
									$.lodash_set(Caches, "fetchAuthTokens.ETag", setETag($request?.headers?.["If-None-Match"] ?? $request?.headers?.["if-none-match"], Caches?.fetchAuthTokens?.ETag));
									$.setjson(Caches, "@iRingo.PrivateRelay.Caches");
									break;
								case "v3_1/fetchConfigFile":
								case "v3_2/fetchConfigFile":
									$.lodash_set(Caches, "fetchConfigFile.ETag", setETag($request?.headers?.["If-None-Match"] ?? $request?.headers?.["if-none-match"], Caches?.fetchConfigFile?.ETag));
									$.setjson(Caches, "@iRingo.PrivateRelay.Caches");
							};
							break;
					};
					if ($request?.headers?.Host) $request.headers.Host = url.host;
					$request.url = URL.stringify(url);
					break;
				case "CONNECT":
				case "TRACE":
					break;
			};
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
						case "application/x-www-form-urlencoded":
						case "text/plain":
						case "text/html":
						case "m3u8":
						case "application/x-mpegurl":
						case "application/vnd.apple.mpegurl":
						case "xml":
						case "srv3":
						case "text/xml":
						case "application/xml":
						case "plist":
						case "text/plist":
						case "application/plist":
						case "application/x-plist":
						case "vtt":
						case "webvtt":
						case "text/vtt":
						case "application/vtt":
						case "json":
						case "json3":
						case "text/json":
						case "application/json":
						default:
							// 返回普通数据
							$.done({ status: $response.status, headers: $response.headers, body: $response.body });
							break;
						case "application/x-protobuf":
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
				const FORMAT = ($request?.headers?.["Content-Type"] ?? $request?.headers?.["content-type"])?.split(";")?.[0];
				$.log(`🎉 ${$.name}, finally`, `$request`, `FORMAT: ${FORMAT}`, "");
				if ($.isQuanX()) {
					switch (FORMAT) {
						case undefined: // 视为无body
							// 返回普通数据
							$.done({ url: $request.url, headers: $request.headers })
							break;
						case "application/x-www-form-urlencoded":
						case "text/plain":
						case "text/html":
						case "m3u8":
						case "application/x-mpegurl":
						case "application/vnd.apple.mpegurl":
						case "xml":
						case "srv3":
						case "text/xml":
						case "application/xml":
						case "plist":
						case "text/plist":
						case "application/plist":
						case "application/x-plist":
						case "vtt":
						case "webvtt":
						case "text/vtt":
						case "application/vtt":
						case "json":
						case "json3":
						case "text/json":
						case "application/json":
						default:
							// 返回普通数据
							$.done({ url: $request.url, headers: $request.headers, body: $request.body })
							break;
						case "application/x-protobuf":
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
