'use client';

import React from 'react';

import { useParams } from 'next/navigation';

export default function ProductDetails() {
  const params = useParams();

  return <div>ProductDetails Page - {params.details}</div>;
}
