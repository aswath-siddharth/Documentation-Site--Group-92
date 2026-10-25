'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CascadeEvent {
  u: string;
  v: string;
  t: number;
  depth: number;
  text: string;
}

interface PresetData {
  name: string;
  description: string;
  events: CascadeEvent[];
}

const PRESETS: Record<string, PresetData> = {
  viral_star: {
    name: "Viral News Burst (Star Fork Dominated)",
    description: "Fast-moving cascade with central broadcast hub generating wide branching forks.",
    events: [
      { u: "u0", v: "u1", t: 12, depth: 1, text: "Initial viral breaking report" },
      { u: "u0", v: "u2", t: 28, depth: 1, text: "First high-profile quote retweet" },
      { u: "u0", v: "u3", t: 45, depth: 1, text: "Broadcast audience expansion" },
      { u: "u1", v: "u4", t: 85, depth: 2, text: "Sub-branch journalist reply" },
      { u: "u0", v: "u5", t: 110, depth: 1, text: "Star fork extension from root" },
      { u: "u2", v: "u6", t: 160, depth: 2, text: "Secondary star hub branching" },
      { u: "u2", v: "u7", t: 195, depth: 2, text: "Second quote reshare" },
      { u: "u0", v: "u8", t: 240, depth: 1, text: "Wave 1 peak broadcast" },
      { u: "u1", v: "u9", t: 310, depth: 2, text: "Discussion amplification" },
      { u: "u4", v: "u10", t: 420, depth: 3, text: "Tier 3 deep reply" },
      { u: "u0", v: "u11", t: 550, depth: 1, text: "Continued direct broadcasts" },
      { u: "u0", v: "u12", t: 720, depth: 1, text: "Observation window tail" }
    ]
  },
  deep_chain: {
    name: "Deep Conversational Debate (Directed Chains)",
    description: "Linear word-of-mouth propagation penetrating deep conversational tiers (depth >= 3).",
    events: [
      { u: "u0", v: "u1", t: 18, depth: 1, text: "Provocative thesis question" },
      { u: "u1", v: "u2", t: 45, depth: 2, text: "Counter-argument raised" },
      { u: "u2", v: "u3", t: 95, depth: 3, text: "Deep directed chain (Depth 3)" },
      { u: "u3", v: "u4", t: 180, depth: 4, text: "Deep directed chain (Depth 4)" },
      { u: "u4", v: "u5", t: 320, depth: 5, text: "Deep directed chain (Depth 5)" },
      { u: "u2", v: "u6", t: 390, depth: 3, text: "Parallel branch in debate" },
      { u: "u6", v: "u7", t: 510, depth: 4, text: "Branch depth extension" },
      { u: "u5", v: "u8", t: 690, depth: 6, text: "Ultra-deep leaf interaction" },
      { u: "u0", v: "u9", t: 780, depth: 1, text: "Late primary branch query" },
      { u: "u9", v: "u10", t: 840, depth: 2, text: "Secondary reply thread" }
    ]
  },
  dyad_cycle: {
    name: "Bilateral Engagement & Triad Closure (Dyad & Cycles)",
    description: "Dense community chatter characterized by ping-pong replies and directed 3-cycles.",
    events: [
      { u: "u0", v: "u1", t: 15, depth: 1, text: "Direct message broadcast" },
      { u: "u1", v: "u2", t: 40, depth: 2, text: "Inquiry to peer u2" },
      { u: "u2", v: "u1", t: 80, depth: 2, text: "Ping-Pong Dyad (u2 -> u1)" },
      { u: "u2", v: "u3", t: 140, depth: 3, text: "Forwarding to peer u3" },
      { u: "u3", v: "u1", t: 210, depth: 2, text: "Reciprocal 3-Cycle Closure (u1-u2-u3)" },
      { u: "u1", v: "u0", t: 340, depth: 1, text: "Ping-Pong Dyad to Root (u1 -> u0)" },
      { u: "u3", v: "u4", t: 430, depth: 3, text: "Outward spread from cycle" },
      { u: "u4", v: "u2", t: 590, depth: 2, text: "Extended loop back" },
      { u: "u0", v: "u5", t: 710, depth: 1, text: "Fresh broadcast listener" },
      { u: "u5", v: "u0", t: 820, depth: 1, text: "Root Dyad confirmation" }
    ]
  },
  dormant_burst: {
    name: "Dormant Reactivation Wave (Second Wind)",
    description: "Prolonged inactivity (>300s) followed by returning users triggering a viral resurgence.",
    events: [
      { u: "u0", v: "u1", t: 10, depth: 1, text: "Early tweet initiation" },
      { u: "u0", v: "u2", t: 25, depth: 1, text: "Early retweet" },
      { u: "u1", v: "u3", t: 60, depth: 2, text: "Initial flurry ends" },
      { u: "u2", v: "u4", t: 95, depth: 2, text: "Cascade goes dormant" },
      { u: "u1", v: "u5", t: 480, depth: 2, text: "Dormant Reactivation (T_idle = 420s > 300s)" },
      { u: "u5", v: "u6", t: 520, depth: 3, text: "Second wave begins" },
      { u: "u5", v: "u7", t: 570, depth: 3, text: "Branch expansion" },
      { u: "u2", v: "u8", t: 650, depth: 2, text: "Dormant user u2 re-engages" },
      { u: "u8", v: "u9", t: 710, depth: 3, text: "Wave 2 acceleration" },
      { u: "u0", v: "u10", t: 810, depth: 1, text: "Late discovery boost" }
    ]
  }
};

function computeCsr(
  nodeToId: Record<string, number>,
  adj: Record<number, number[]>,
  nodeHistory: Record<number, number[]>
) {
  const n = Object.keys(nodeToId).length;
  const indptr: number[] = [0];
  const indices: number[] = [];
  const timestamps: number[] = [];

  for (let nid = 0; nid < n; nid++) {
    const nbrs = adj[nid] || [];
    indptr.push(indptr[indptr.length - 1] + nbrs.length);
    for (const target of nbrs) {
      indices.push(target);
      const t = (nodeHistory[target]?.length) ? nodeHistory[target][0] : 0;
      timestamps.push(t);
    }
  }
  return { indptr, indices, timestamps };
}

export default function InteractiveSimulator() {
  const [presetKey, setPresetKey] = useState<string>('viral_star');
  const [eventIndex, setEventIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playSpeed, setPlaySpeed] = useState<number>(1200);

  // Inspector States
  const [activeMotif, setActiveMotif] = useState({
    name: "Ready for stream ingestion",
    code: "none",
    desc: "Press Play or Step to trace dynamic CSR and causal motifs.",
    color: "#94a3b8"
  });

  const [predictedInc, setPredictedInc] = useState<number>(0);
  const [predLog2, setPredLog2] = useState<string>("0.00");
  const [attentionAlpha, setAttentionAlpha] = useState<number>(0);
  const [featureVector, setFeatureVector] = useState<number[]>(new Array(15).fill(0));
  const [activeParentNid, setActiveParentNid] = useState<number>(-1);
  const [csrState, setCsrState] = useState<{
    indptr: number[];
    indices: number[];
    timestamps: number[];
    nodeCount: number;
  }>({
    indptr: [0, 0],
    indices: [],
    timestamps: [],
    nodeCount: 1,
  });

  // Graph state references
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodesRef = useRef<Record<string, { id: string; nid: number; label: string; x: number; y: number; depth: number; color: string }>>({});
  const edgesRef = useRef<Array<{ u: string; v: string; t: number; motif: string; color: string; alpha: number }>>([]);
  const nodeToIdRef = useRef<Record<string, number>>({});
  const adjRef = useRef<Record<number, number[]>>({});
  const edgeSetRef = useRef<Set<string>>(new Set());
  const nodeHistoryRef = useRef<Record<number, number[]>>({});
  const parentMapRef = useRef<Record<number, number>>({});
  const descendantCountsRef = useRef<Record<number, number>>({});

  const currentPreset = PRESETS[presetKey];

  // Reset graph data
  const resetGraph = () => {
    setIsPlaying(false);
    setEventIndex(0);
    setActiveParentNid(-1);
    setPredictedInc(0);
    setPredLog2("0.00");
    setAttentionAlpha(0);
    setFeatureVector(new Array(15).fill(0));
    setActiveMotif({
      name: "Ready for stream ingestion",
      code: "none",
      desc: "Press Play or Step to trace dynamic CSR and causal motifs.",
      color: "#94a3b8"
    });

    nodesRef.current = {};
    edgesRef.current = [];
    nodeToIdRef.current = {};
    adjRef.current = {};
    edgeSetRef.current = new Set();
    nodeHistoryRef.current = {};
    parentMapRef.current = {};
    descendantCountsRef.current = {};

    // Setup Root node
    const rootName = "u0";
    nodeToIdRef.current[rootName] = 0;
    adjRef.current[0] = [];
    nodeHistoryRef.current[0] = [0];

    const canvas = canvasRef.current;
    const w = canvas ? canvas.width : 500;
    nodesRef.current[rootName] = {
      id: rootName,
      nid: 0,
      label: "u0 (Root)",
      x: w / 2,
      y: 70,
      depth: 0,
      color: '#f59e0b'
    };

    setCsrState({
      indptr: [0, 0],
      indices: [],
      timestamps: [],
      nodeCount: 1,
    });

    drawCanvas();
  };

  const getNodeId = (name: string) => {
    if (nodeToIdRef.current[name] === undefined) {
      const nid = Object.keys(nodeToIdRef.current).length;
      nodeToIdRef.current[name] = nid;
      adjRef.current[nid] = [];
      nodeHistoryRef.current[nid] = [];
    }
    return nodeToIdRef.current[name];
  };

  const assignNodePosition = (name: string, depth: number) => {
    if (nodesRef.current[name]) return;
    const canvas = canvasRef.current;
    const width = canvas ? canvas.width : 500;
    const height = canvas ? canvas.height : 400;

    const ySpacing = Math.min(65, (height - 110) / 6);
    const y = 80 + (depth * ySpacing);

    const nodesAtDepth = Object.values(nodesRef.current).filter(n => n.depth === depth).length;
    const totalSlots = nodesAtDepth + 2;
    const x = (width / totalSlots) * (nodesAtDepth + 1) + ((Math.random() - 0.5) * 20);

    let color = '#38bdf8';
    if (depth === 0) color = '#f59e0b';
    else if (depth === 1) color = '#06b6d4';
    else if (depth === 2) color = '#818cf8';
    else if (depth >= 3) color = '#c084fc';

    nodesRef.current[name] = {
      id: name,
      nid: getNodeId(name),
      label: name,
      x: Math.max(45, Math.min(width - 45, x)),
      y: y,
      depth: depth,
      color: color
    };
  };

  // Detect Causal Motifs on G_{t-}
  const detectMotifOnGtMinus = (uNid: number, vNid: number, parentDepth: number) => {
    const uNeighbors = adjRef.current[uNid] || [];
    const vNeighbors = adjRef.current[vNid] || [];

    const isCycle = vNeighbors.some(w => edgeSetRef.current.has(`${w},${uNid}`));
    const isDyad = edgeSetRef.current.has(`${vNid},${uNid}`);
    const isChain = (parentDepth + 1) >= 3;
    const isStar = uNeighbors.length >= 1;
    const isSingle = !(isCycle || isDyad || isChain || isStar);

    let name = "Single Direct Reply (Col 0)";
    let code = "single";
    let desc = "Default 1-to-1 linear reply. Out-degree 0, depth < 3.";
    let color = "#94a3b8";

    if (isCycle) {
      name = "Reciprocal 3-Cycle (Col 4)";
      code = "cycle";
      desc = "Closes conversational triangle triad (u -> v -> w -> u). Dense triad closure.";
      color = "#ec4899";
    } else if (isDyad) {
      name = "Ping-Pong Dyad (Col 3)";
      code = "dyad";
      desc = "Mutual interaction u ↔ v. Bilateral debate & high excitement.";
      color = "#a855f7";
    } else if (isChain) {
      name = "Deep Directed Chain (Col 2)";
      code = "chain";
      desc = `Deep conversational branch (depth ${(parentDepth + 1)} ≥ 3). Viral word-of-mouth.`;
      color = "#6366f1";
    } else if (isStar) {
      name = "Sibling Star Fork (Col 1)";
      code = "star";
      desc = `Parent has ${uNeighbors.length} prior children. Parent acts as broadcast hub.`;
      color = "#38bdf8";
    }

    return {
      vector: [isSingle ? 1 : 0, isStar ? 1 : 0, isChain ? 1 : 0, isDyad ? 1 : 0, isCycle ? 1 : 0],
      name,
      code,
      desc,
      color
    };
  };

  // Step simulation
  const step = () => {
    if (eventIndex >= currentPreset.events.length) {
      setIsPlaying(false);
      return false;
    }

    const ev = currentPreset.events[eventIndex];
    const uNid = getNodeId(ev.u);
    const vNid = getNodeId(ev.v);

    assignNodePosition(ev.u, ev.depth > 0 ? ev.depth - 1 : 0);
    assignNodePosition(ev.v, ev.depth);

    const parentDepth = nodesRef.current[ev.u]?.depth ?? 0;

    // 1. Causal Motif detection on G_{t-}
    const motif = detectMotifOnGtMinus(uNid, vNid, parentDepth);

    // 2. 15-D vector extraction
    const prevTime = eventIndex > 0 ? currentPreset.events[eventIndex - 1].t : 0;
    const dt_edge = ev.t - prevTime;
    const parentOutDeg = (adjRef.current[uNid] || []).length;
    const activeNodes = Object.keys(nodeToIdRef.current).length;

    const uHist = nodeHistoryRef.current[uNid] || [];
    const lastActiveTime = uHist.length > 0 ? uHist[uHist.length - 1] : 0;
    const t_idle = ev.t - lastActiveTime;
    const i_reactivate = (t_idle > 300) ? 1.0 : 0.0;
    const descendant_count = descendantCountsRef.current[uNid] || 0;
    const dt_motif = Math.max(8, dt_edge * 0.85);
    const cumulative_prior = eventIndex;

    const vec = [
      ...motif.vector,
      ev.depth,
      parentOutDeg,
      activeNodes,
      ev.t,
      i_reactivate,
      t_idle,
      descendant_count,
      dt_motif,
      cumulative_prior,
      dt_edge
    ];

    // 3. Attentive sequence weight & predicted virality
    const rawScore = 0.4 + (motif.code === 'star' ? 0.9 : 0.0)
                        + (motif.code === 'chain' ? 1.2 : 0.0)
                        + (motif.code === 'cycle' ? 0.8 : 0.0)
                        + (i_reactivate ? 1.4 : 0.0)
                        - (ev.t / 1200);
    const alpha = Math.min(0.38, Math.max(0.04, Math.exp(rawScore) / (eventIndex + 3.2)));

    const currentCascRetweets = Math.round(
      Math.pow(2, 3.2 + (eventIndex * 0.42) + (motif.code === 'star' ? 1.2 : 0) + (motif.code === 'chain' ? 1.8 : 0) + (i_reactivate ? 2.1 : 0)) - 1
    );
    const logVal = (Math.log2(currentCascRetweets + 1)).toFixed(2);

    // 4. Update In-memory graph state
    adjRef.current[uNid].push(vNid);
    edgeSetRef.current.add(`${uNid},${vNid}`);
    nodeHistoryRef.current[vNid].push(ev.t);
    parentMapRef.current[vNid] = uNid;

    let curr: number | undefined = uNid;
    const visited = new Set<number>();
    while (curr !== undefined && !visited.has(curr)) {
      visited.add(curr);
      descendantCountsRef.current[curr] = (descendantCountsRef.current[curr] || 0) + 1;
      curr = parentMapRef.current[curr];
    }

    edgesRef.current.push({
      u: ev.u,
      v: ev.v,
      t: ev.t,
      motif: motif.code,
      color: motif.color,
      alpha: alpha
    });

    // Update state
    setActiveParentNid(uNid);
    setActiveMotif(motif);
    setPredictedInc(currentCascRetweets);
    setPredLog2(logVal);
    setAttentionAlpha(alpha);
    setFeatureVector(vec);
    setEventIndex(prev => prev + 1);

    const csr = computeCsr(nodeToIdRef.current, adjRef.current, nodeHistoryRef.current);
    setCsrState({
      ...csr,
      nodeCount: Object.keys(nodesRef.current).length,
    });

    drawCanvas();
    return eventIndex + 1 < currentPreset.events.length;
  };

  // Canvas Drawing
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Subtle Grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 35) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 35) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw Edges
    for (const e of edgesRef.current) {
      const uNode = nodesRef.current[e.u];
      const vNode = nodesRef.current[e.v];
      if (!uNode || !vNode) continue;

      ctx.beginPath();
      ctx.strokeStyle = e.color || 'rgba(99, 102, 241, 0.6)';
      ctx.lineWidth = Math.max(1.8, e.alpha * 12);

      const dx = vNode.x - uNode.x;
      const dy = vNode.y - uNode.y;
      const cx = (uNode.x + vNode.x) / 2 + (dy * 0.15);
      const cy = (uNode.y + vNode.y) / 2 - (dx * 0.15);

      ctx.moveTo(uNode.x, uNode.y);
      ctx.quadraticCurveTo(cx, cy, vNode.x, vNode.y);
      ctx.stroke();

      // Arrow
      const angle = Math.atan2(vNode.y - cy, vNode.x - cx);
      const targetX = vNode.x - Math.cos(angle) * 14;
      const targetY = vNode.y - Math.sin(angle) * 14;
      ctx.beginPath();
      ctx.moveTo(targetX, targetY);
      ctx.lineTo(targetX - 7 * Math.cos(angle - Math.PI / 6), targetY - 7 * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(targetX - 7 * Math.cos(angle + Math.PI / 6), targetY - 7 * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fillStyle = e.color || '#38bdf8';
      ctx.fill();
    }

    // Draw Nodes
    for (const id in nodesRef.current) {
      const n = nodesRef.current[id];
      const isRoot = (n.depth === 0);
      const radius = isRoot ? 16 : 13;

      ctx.beginPath();
      ctx.arc(n.x, n.y, radius + 5, 0, Math.PI * 2);
      ctx.fillStyle = isRoot ? 'rgba(245, 158, 11, 0.2)' : 'rgba(99, 102, 241, 0.15)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      ctx.font = 'bold 9px Inter, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(n.label, n.x, n.y);
    }
  };

  const stepRef = useRef(step);
  useEffect(() => {
    stepRef.current = step;
  });

  // Continuous animation timer
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isPlaying) {
      timer = setInterval(() => {
        const hasMore = stepRef.current();
        if (!hasMore) {
          setIsPlaying(false);
        }
      }, playSpeed);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, playSpeed]);

  // Handle Canvas Resize and initial graph setup
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = Math.max(380, rect.height);
        drawCanvas();
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { indptr, indices } = csrState;

  const sliceStart = activeParentNid >= 0 && indptr[activeParentNid] !== undefined ? indptr[activeParentNid] : -1;
  const sliceEnd = activeParentNid >= 0 && indptr[activeParentNid + 1] !== undefined ? indptr[activeParentNid + 1] : -1;

  const vectorLabels = ["Sing", "Star", "Chn", "Dyad", "Cyc", "Dpth", "OutD", "Ncnt", "tRoot", "Irec", "Tidl", "Desc", "dtM", "CumP", "dtEd"];
  const vectorMax = [1, 1, 1, 1, 1, 6, 8, 15, 900, 1, 600, 10, 300, 15, 300];

  return (
    <section id="simulator" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#10b981] block mb-2">
            04 • Interactive Simulation
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Live Diffusion &amp; Causal Motif Simulator
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Step through continuous-time diffusion events, inspect contiguous CSR memory array slicing in real-time, and watch attentive pooling forecast 24-hour virality.
          </p>
        </div>

        {/* Simulator Wrapper */}
        <div className="bg-[#151d30] border border-[#6366f1]/30 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
          {/* Controls Bar */}
          <div className="p-4 sm:p-5 bg-black/40 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <label htmlFor="sim-preset-dropdown" className="text-xs font-semibold text-slate-300">Preset Cascade:</label>
              <select
                id="sim-preset-dropdown"
                value={presetKey}
                onChange={(e) => {
                  const newKey = e.target.value;
                  setPresetKey(newKey);
                  resetGraph();
                }}
                className="bg-[#090d16] border border-white/10 text-white text-xs rounded-lg px-3 py-1.5 focus:border-[#6366f1] outline-none"
              >
                <option value="viral_star">Viral News Burst (Star Fork Hubs)</option>
                <option value="deep_chain">Deep Conversational Debate (Directed Chains)</option>
                <option value="dyad_cycle">Bilateral Engagement &amp; Triad Closure (Dyads/Cycles)</option>
                <option value="dormant_burst">Dormant Reactivation Wave (Second Wind)</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (eventIndex >= currentPreset.events.length) {
                    resetGraph();
                  }
                  setIsPlaying(!isPlaying);
                }}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isPlaying 
                    ? 'bg-rose-600 text-white hover:bg-rose-700' 
                    : 'bg-[#6366f1] text-white hover:bg-[#4f46e5] shadow-lg shadow-[#6366f1]/30'
                }`}
              >
                {isPlaying ? '⏸ Pause' : '▶ Play Stream'}
              </button>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  step();
                }}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10"
              >
                Step Event ⏭
              </button>

              <button
                onClick={resetGraph}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10"
              >
                Reset
              </button>

              <select
                value={playSpeed}
                onChange={(e) => setPlaySpeed(Number(e.target.value))}
                className="bg-[#090d16] border border-white/10 text-slate-300 text-xs rounded-lg px-2 py-1.5 outline-none"
              >
                <option value={1800}>0.7x</option>
                <option value={1200}>1.0x</option>
                <option value={600}>2.0x</option>
              </select>
            </div>
          </div>

          {/* Simulator Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left: Canvas Graph Panel */}
            <div className="lg:col-span-7 bg-[#090c14] relative border-b lg:border-b-0 lg:border-r border-white/10 min-h-[380px] flex flex-col">
              <div className="absolute top-3 left-3 bg-[#0d121f]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono flex gap-4 text-slate-300 z-10">
                <div>Events: <strong className="text-[#38bdf8]">{eventIndex} / {currentPreset.events.length}</strong></div>
                <div>Time: <strong className="text-[#818cf8]">{eventIndex > 0 ? `${currentPreset.events[eventIndex - 1].t}s` : '0s'}</strong></div>
                <div>Nodes: <strong className="text-[#34d399]">{csrState.nodeCount}</strong></div>
              </div>
              <canvas ref={canvasRef} className="w-full h-full block flex-1" />
            </div>

            {/* Right: Real-time CSR & Causal Vector Inspector */}
            <div className="lg:col-span-5 p-5 bg-[#0d121f] flex flex-col gap-4 overflow-y-auto max-h-[520px]">
              {/* Active Motif Detection */}
              <div className="bg-[#151d30] border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
                  <span>Causal Motif on G_t−</span>
                  <span className="text-[#34d399] text-[10px]">Zero Leakage</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4] pulse-indicator flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold" style={{ color: activeMotif.color }}>
                      {activeMotif.name}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                      {activeMotif.desc}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic CSR Memory Slices */}
              <div className="bg-[#151d30] border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
                  <span>Contiguous CSR Memory Layout</span>
                  <span className="text-[#818cf8] text-[10px]">O(1) Slice Lookups</span>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                      <span>indptr [|V|+1]</span>
                      <span className="text-slate-500">offsets</span>
                    </div>
                    <div className="flex flex-wrap gap-1 bg-black/40 p-2 rounded border border-white/5">
                      {indptr.map((val, idx) => {
                        const isSlice = (idx === activeParentNid || idx === activeParentNid + 1);
                        return (
                          <div
                            key={idx}
                            className={`px-1.5 py-0.5 rounded text-[11px] border ${
                              isSlice 
                                ? 'bg-[#6366f1]/30 border-[#818cf8] text-white shadow-sm shadow-[#6366f1]' 
                                : 'bg-white/5 border-white/5 text-slate-300'
                            }`}
                          >
                            <span className="text-[9px] text-slate-500 block leading-tight">{idx}</span>
                            <span>{val}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                      <span>indices [|E|]</span>
                      <span className="text-slate-500">contiguous neighbors</span>
                    </div>
                    <div className="flex flex-wrap gap-1 bg-black/40 p-2 rounded border border-white/5 min-h-[32px]">
                      {indices.length === 0 ? (
                        <span className="text-slate-500 text-[10px]">[empty]</span>
                      ) : (
                        indices.map((val, idx) => {
                          const inSlice = (idx >= sliceStart && idx < sliceEnd);
                          return (
                            <div
                              key={idx}
                              className={`px-1.5 py-0.5 rounded text-[11px] border ${
                                inSlice 
                                ? 'bg-[#06b6d4]/30 border-[#06b6d4] text-white' 
                                : 'bg-white/5 border-white/5 text-slate-300'
                              }`}
                            >
                              <span className="text-[9px] text-slate-500 block leading-tight">{idx}</span>
                              <span>u{val}</span>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 15-D Vector Bar Gauge */}
              <div className="bg-[#151d30] border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
                  <span>15-D Causal Event Vector</span>
                  <span className="text-[#c084fc] text-[10px]">BiGRU Input</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {featureVector.map((val, idx) => {
                    const max = vectorMax[idx] || 1;
                    const pct = Math.min(100, Math.max(8, (val / max) * 100));
                    return (
                      <div
                        key={idx}
                        className="bg-black/30 border border-white/5 rounded h-9 relative flex flex-col justify-end overflow-hidden p-0.5"
                        title={`${vectorLabels[idx]}: ${val}`}
                      >
                        <span className="text-[8px] font-mono text-slate-400 text-center block w-full absolute top-0.5 left-0">
                          {vectorLabels[idx]}
                        </span>
                        <div
                          className="w-full bg-gradient-to-t from-[#6366f1] to-[#38bdf8] rounded-sm transition-all duration-300"
                          style={{ height: `${pct}%` }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Attentive Sequence Prediction */}
              <div className="bg-[#151d30] border border-[#10b981]/30 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Predicted 24h Increment:</div>
                  <div className="font-display font-bold text-2xl text-[#34d399]">
                    +{predictedInc.toLocaleString()} retweets
                  </div>
                </div>
                <div className="text-right font-mono">
                  <div className="text-xs text-[#f59e0b]">α_j = {attentionAlpha.toFixed(4)}</div>
                  <div className="text-base text-[#38bdf8] font-bold">ŷ = {predLog2}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
