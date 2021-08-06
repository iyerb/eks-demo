import * as cdk from '@aws-cdk/core';
import * as eks from '@aws-cdk/aws-eks';
import * as cdk8s from 'cdk8s';
import { MyChart } from './my-chart';

export class CdkEksAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /**
     * Code to create the EKS Cluster
     */
    const cluster = new eks.Cluster(this, 'ckdekscluster', {
      version: eks.KubernetesVersion.V1_18,
    });

    /**
     * Code to add pods on eks cluster. All containers are define in MyChart
     */
    //cluster.addCdk8sChart('my-chart', new MyChart(new cdk8s.App(), 'MyChart'));
  }
}
