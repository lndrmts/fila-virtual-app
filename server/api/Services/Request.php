<?php

namespace Api\Services;

use GuzzleHttp\Client;

class Request
{
	protected $client;

	public function __construct($baseUri, $timeout = 2)
	{
		$this->client = new Client(['base_uri' => $baseUri, 'timeout' => $timeout]);
	}

	public function get($uri, $queryParams = [])
	{
		$response = $this->client->request('GET', $uri, ['query' => $queryParams]);
		$body = $response->getBody();
		return (string) $body;
	}

}